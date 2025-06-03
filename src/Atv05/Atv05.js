import React from 'react';
import FormQuiz from './FormQuiz';
import FormTicket from './FormTicket';
import Accordion from './Accordion';
import Messenger from './Messenger'; // 1. Importe o Messenger
import { Link } from 'react-router-dom';

export default function Atv05() {
  return (
    <>
      <h1>Semana 5: Atividades do PDF</h1>
      <hr />
      <h2>FormQuiz Component</h2>
      <FormQuiz />
      <hr />
      <h2>FormTicket Component</h2>
      <FormTicket />
      <hr />
      <h2>Accordion Component</h2>
      <Accordion />
      <hr />
      <h2>Messenger (ContactList & Chat) Component</h2> {/* 2. Adicione um título */}
      <Messenger /> {/* 3. Renderize o Messenger */}
      <hr />
      <Link to="/">Voltar</Link>
    </>
  );
}