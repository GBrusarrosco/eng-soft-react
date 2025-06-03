import { useState } from 'react';

export default function Chat({ contact }) {
  const [text, setText] = useState('');

  return (
    <section className="chat" style={{ float: 'left', marginLeft: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <textarea
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={e => setText(e.target.value)}
        rows={5}
        cols={30}
      />
      <br />
      <button style={{ marginTop: '5px' }}>Send to {contact.email}</button>
    </section>
  );
}