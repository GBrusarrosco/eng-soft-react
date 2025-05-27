import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';

function Contador() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const total = homens + mulheres;

  const incrementarHomens = () => setHomens(homens + 1);
  const decrementarHomens = () => {
    if (homens > 0) setHomens(homens - 1);
  };

  const incrementarMulheres = () => setMulheres(mulheres + 1);
  const decrementarMulheres = () => {
    if (mulheres > 0) setMulheres(mulheres - 1);
  };

  const resetar = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="contador-container">
      <h2>Atividade 02: Contador de Pessoas</h2>

      <div className="contagem">
        <p>Homens: {homens}</p>
        <p>Mulheres: {mulheres}</p>
        <h3>Total: {total}</h3>
      </div>

      <div className="buttons">
        <button onClick={incrementarHomens}>+ Homem</button>
        <button onClick={decrementarHomens}>- Homem</button>
        <br />
        <button onClick={incrementarMulheres}>+ Mulher</button>
        <button onClick={decrementarMulheres}>- Mulher</button>
        <br />
        <button onClick={resetar} className="reset-button">Zerar</button>
      </div>

      <br />
    </div>
  );
}

export default Contador;
