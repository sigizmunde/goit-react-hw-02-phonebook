import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

function ContactList({ state: { contacts, filter } }) {
  console.log({ contacts, filter });
  return (
    <List>
      {contacts
        .filter(c => c.name.toLowerCase().includes(filter))
        .map(c => (
          <ContactItem key={c.id} name={c.name} number={c.number} />
        ))}
    </List>
  );
}

export default ContactList;
