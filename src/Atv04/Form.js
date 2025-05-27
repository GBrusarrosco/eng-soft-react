import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  return (
    <form onSubmit={e => e.preventDefault()}>
      <label>
        Nome:
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <p>Olá, {name}!</p>
    </form>
  );
}
