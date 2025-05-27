import { useState } from "react";

const items = [
  { id: 1, title: "Ir à praia" },
  { id: 2, title: "Viajar para o Japão" },
  { id: 3, title: "Aprender React" }
];

export default function BucketList() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <button
            onClick={() => setSelectedId(item.id)}
            style={{
              fontWeight: item.id === selectedId ? "bold" : "normal"
            }}
          >
            {item.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
