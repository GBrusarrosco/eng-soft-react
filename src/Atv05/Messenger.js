import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div style={{ overflow: 'hidden', padding: '10px' }}> {/* clearfix e padding */}
      <h2>Chat Messenger</h2>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.email} contact={to} />
    </div>
  );
}