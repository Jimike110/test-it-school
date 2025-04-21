import React, { useCallback, useEffect, useRef, useState } from 'react';

export default function RobotEmbed({ size = 500 }) {
  const BASE_URL = '/assets/robot/robot.svg';
  const [active, setActive] = useState(0);
  const [urls, setUrls]   = useState([BASE_URL, BASE_URL]);
  const refs = [useRef(null), useRef(null)];

  // Swap visibility when the hidden one finishes loading
  const handleLoad = (idx) => {
    if (idx !== active) {
      setActive(idx);
    }
  };

  // Define reload with the proper dependency on `active`
  const reload = useCallback(() => {
    const next = 1 - active;
    const timestamped = `${BASE_URL}?t=${Date.now()}`;
    setUrls((u) => {
      const copy = [...u];
      copy[next] = timestamped;
      return copy;
    });
    // when <object> fires onLoad, handleLoad() will flip `active`
  }, [active]);

  // Kick off (and clean up) the interval whenever `reload` changes
  useEffect(() => {
    const interval = setInterval(reload, 10000);
    return () => clearInterval(interval);
  }, [reload]);

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: size, height: size }}>
      {refs.map((r, idx) => (
        <object
          key={idx}
          ref={r}
          type="image/svg+xml"
          data={urls[idx]}
          onLoad={() => handleLoad(idx)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: active === idx ? 1 : 0,
            pointerEvents: 'none'
          }}
          aria-label="Robot animation"
        />
      ))}
    </div>
  );
}
