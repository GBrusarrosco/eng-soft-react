function Botao({ texto, onClick }) {
    return <button onClick={onClick}>{texto}</button>;
  }
  
  export default function Toolbar() {
    return (
      <div>
        <Botao texto="Salvar" onClick={() => alert("Salvo!")} />
        <Botao texto="Compartilhar" onClick={() => alert("Compartilhado!")} />
      </div>
    );
  }
  