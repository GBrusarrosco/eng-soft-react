import { Link } from "react-router-dom";
import Galeria from "./Galeria";
import GaleriaViajens from "./GaleriaViajens";

export default function Atv03() {
  return (
    <>
      <h2>Semana 3</h2>
      <Galeria />
      <br />
      <GaleriaViajens/>
      <Link to="/">Voltar</Link>
    </>
  );
}
