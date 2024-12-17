export const snowConfig = {
  count: document.documentElement.clientWidth * 10,
  randomness: 0.5,
  randomnessPower: 3,
  sizeMin: 1.0,
  sizeMax: 4.0,
  opacityMin: 0.1,
  opacityMax: 0.4,
  gravity: 12.0,
};

export const windConfig = {
  current: 0,
  force: 0.05,
  target: 0.05,
  min: 0.05,
  max: 0.1,
  easing: 0.003,
};

export const shaderConfig = {
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
};