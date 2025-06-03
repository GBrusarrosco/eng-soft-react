export default function ContactList({
    selectedContact,
    contacts,
    onSelect
  }) {
    return (
      <section className="contact-list" style={{ float: 'left', border: '1px solid #ccc', padding: '10px' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {contacts.map(contact =>
            <li key={contact.email} style={{ marginBottom: '5px' }}>
              <button
                onClick={() => {
                  onSelect(contact);
                }}
                style={ contact.email === selectedContact.email ? {fontWeight: 'bold'} : {} }
              >
                {contact.name}
              </button>
            </li>
          )}
        </ul>
      </section>
    );
  }