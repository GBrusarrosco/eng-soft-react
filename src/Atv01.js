import { Link } from "react-router-dom";
import Letreiro from "./Letreiro";
import Relogio from "./Relogio";

export default function Atv01() {
  return (
    <>
        <h2>Semana 1</h2>
        <Letreiro/>
        <h2>Relógio</h2>
        <Relogio/>
        <Link to="/">Voltar</Link>
    </>
  );
}

