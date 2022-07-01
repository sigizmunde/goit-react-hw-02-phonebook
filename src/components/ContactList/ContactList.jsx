import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

function ContactList({ contacts }) {
  return (
    <List>
      {contacts.map(c => (
        <ContactItem key={c.id} name={c.name} />
      ))}
    </List>
  );
}

export default ContactList;
