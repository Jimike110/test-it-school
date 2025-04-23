export default function RobotEmbed({ size = 500 }) {
  const ROBOT_URL = '/assets/robot/robot.svg';

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: size, height: size }}>
      <object
        type="image/svg+xml"
        data={ROBOT_URL}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 1,
          pointerEvents: 'none'
        }}
        aria-label="Robot animation"
      />
    </div>
  );
}
