import { useState } from "react";

let nextId = 3;
const initialList = [
  { id: 0, title: "Aprender React" },
  { id: 1, title: "Estudar hooks" },
  { id: 2, title: "Fazer projeto" }
];

export default function List() {
  const [name, setName] = useState("");
  const [list, setList] = useState(initialList);

  function handleAdd() {
    setList([...list, { id: nextId++, title: name }]);
    setName("");
  }

  function handleRemove(id) {
    setList(list.filter(item => item.id !== id));
  }

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleAdd}>Adicionar</button>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            {item.title} <button onClick={() => handleRemove(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}
