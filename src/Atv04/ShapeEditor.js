import { useState } from "react";

export default function ShapeEditor() {
  const [shape, setShape] = useState("círculo");

  return (
    <>
      <button onClick={() => setShape("círculo")}>Círculo</button>
      <button onClick={() => setShape("quadrado")}>Quadrado</button>
      <div
        style={{
          marginTop: 10,
          width: 100,
          height: 100,
          background: "skyblue",
          borderRadius: shape === "círculo" ? "50%" : "0%"
        }}
      />
    </>
  );
}
