import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
