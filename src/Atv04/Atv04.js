import { Link } from "react-router-dom";
import Toolbar from "./Toolbar";
import Gallery from "./Gallery";
import Counter from "./Counter";
import Form from "./Form";
import List from "./List";
import MovingDot from "./MovingDot";
import ShapeEditor from "./ShapeEditor";
import CounterList from "./CounterList";
import BucketList from "./BucketList";


export default function Atv04() {
  return (
    <div>
      <h2>Semana 4</h2>
      <Toolbar/>
      <Gallery />
      <Counter />
      <Form />
      <List />
      <MovingDot />
      <ShapeEditor />
      <CounterList />
      <BucketList />
      <br />
    </div>
  );
}

