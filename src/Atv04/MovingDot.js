import { useState } from "react";

export default function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      onPointerMove={e => {
        setPosition({ x: e.clientX, y: e.clientY });
      }}
      style={{
        height: "200px",
        backgroundColor: "#eee",
        position: "relative"
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          width: 10,
          height: 10,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
    </div>
  );
}
