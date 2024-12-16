import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Snow {
  count: number;
  randomness: number;
  randomnessPower: number;
  sizeMin: number;
  sizeMax: number;
  opacityMin: number;
  opacityMax: number;
  gravity: number;
}

interface Wind {
  current: number;
  force: number;
  target: number;
  min: number;
  max: number;
  easing: number;
}

export const ThreeSnow = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.5,
      100
    );
    camera.position.set(-0.25, 0, -2);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const snow: Snow = {
      count: document.documentElement.clientWidth * 10,
      randomness: 0.5,
      randomnessPower: 3,
      sizeMin: 1.0,
      sizeMax: 4.0,
      opacityMin: 0.1,
      opacityMax: 0.4,
      gravity: 25.0,
    };

    const wind: Wind = {
      current: 0,
      force: 0.1,
      target: 0.1,
      min: 0.1,
      max: 0.2,
      easing: 0.005,
    };

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(snow.count * 3);
    const scales = new Float32Array(snow.count);
    const randomness = new Float32Array(snow.count * 3);
    const speeds = new Float32Array(snow.count * 3);
    const rotations = new Float32Array(snow.count * 3);
    const opacities = new Float32Array(snow.count);

    for (let i = 0; i < snow.count; i++) {
      const i3 = i * 2;

      positions[i3] = (Math.random() - 0.5) * 12;
      positions[i3 + 1] = (Math.random() - 0.5) * 12;
      positions[i3 + 2] = (Math.random() - 0.5) * 12;

      const randomX =
        Math.pow(Math.random(), snow.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        snow.randomness;
      const randomY =
        Math.pow(Math.random(), snow.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        snow.randomness;
      const randomZ =
        Math.pow(Math.random(), snow.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        snow.randomness;

      randomness[i3] = randomX;
      randomness[i3 + 1] = randomY;
      randomness[i3 + 2] = randomZ;

      opacities[i] =
        Math.random() * (snow.opacityMax - snow.opacityMin) + snow.opacityMin;
      scales[i] =
        Math.random() * (snow.sizeMax - snow.sizeMin) + snow.sizeMin;

      speeds[i3] = 1 + Math.random();
      speeds[i3 + 1] = Math.random() * 0.01 + 0.05;
      speeds[i3 + 2] = Math.random() * 0.15 + 0.05;

      rotations[i3] = Math.random() * Math.PI * 2;
      rotations[i3 + 1] = Math.random() * 20;
      rotations[i3 + 2] = Math.random() * 10;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    geometry.setAttribute("aRandomness", new THREE.BufferAttribute(randomness, 3));
    geometry.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 3));
    geometry.setAttribute("aRotation", new THREE.BufferAttribute(rotations, 3));
    geometry.setAttribute("aOpacity", new THREE.BufferAttribute(opacities, 1));

    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load(
      "https://assets.codepen.io/122136/snowflake_1.png"
    );

    const material = new THREE.ShaderMaterial({
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      vertexShader: `
        precision mediump float;
        attribute float aOpacity;
        attribute float aScale;
        attribute vec3 aRotation;
        attribute vec3 aSpeed;
        uniform float uTime;
        uniform float uSize;
        uniform float uGravity;
        uniform vec3 uSpeed;
        uniform vec3 uWorldSize;
        uniform float uWind;
        varying float vRotation;
        varying float vOpacity;
        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.5);
          vOpacity = aOpacity;
          vRotation = aRotation.x + uTime * aRotation.y;
          modelPosition.x = mod(modelPosition.x + uTime + uWind * aSpeed.x, uWorldSize.x * 2.0) - uWorldSize.x;
          modelPosition.y = mod(modelPosition.y - uTime * aSpeed.y * uGravity, uWorldSize.y * 2.0) - uWorldSize.y;
          modelPosition.x += (sin(uTime * aSpeed.z) * aRotation.z);
          modelPosition.z += cos(uTime * aSpeed.z) * aRotation.z;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;
          gl_Position = projectedPosition;
          gl_PointSize = uSize * aScale;
          gl_PointSize *= (1.0 / -viewPosition.z);
        }
      `,
      fragmentShader: `
        precision mediump float;
        varying float vOpacity;
        uniform sampler2D uTexture;
        varying float vRotation;
        void main() {
          vec2 rotated = vec2(
            cos(vRotation) * (gl_PointCoord.x - 0.5) + sin(vRotation) * (gl_PointCoord.y - 0.5) + 0.5,
            cos(vRotation) * (gl_PointCoord.y - 0.5) - sin(vRotation) * (gl_PointCoord.x - 0.5) + 0.5
          );
          vec4 snowflake = texture2D(uTexture, rotated);
          gl_FragColor = vec4(snowflake.rgb, snowflake.a * vOpacity);
        }
      `,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 30 * renderer.getPixelRatio() },
        uSpeed: { value: new THREE.Vector3(0.0000001, 0.02, Math.random()) },
        uGravity: { value: snow.gravity },
        uWorldSize: { value: new THREE.Vector3(6, 6, 6) },
        uTexture: { value: particleTexture },
        uRotation: { value: new THREE.Vector3(1, 1, 1) },
        uWind: { value: 0 },
      },
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const clock = new THREE.Clock();
    let previousTime = 0;

    const updateWind = (deltaTime: number) => {
      wind.force += (wind.target - wind.force) * wind.easing;
      wind.current += wind.force * (deltaTime * 0.2);

      if (Math.random() > 0.995) {
        wind.target =
          (wind.min + Math.random() * (wind.max - wind.min)) *
          (Math.random() > 0.5 ? -1 : 1) *
          100;
      }
    };

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousTime;
      previousTime = elapsedTime;

      updateWind(deltaTime);

      material.uniforms.uWind.value = wind.current;
      material.uniforms.uTime.value = elapsedTime;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
    />
  );
};