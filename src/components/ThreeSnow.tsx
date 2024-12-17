import { useSnowScene } from './three/useSnowScene';

export const ThreeSnow = () => {
  const canvasRef = useSnowScene();

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
    />
  );
};