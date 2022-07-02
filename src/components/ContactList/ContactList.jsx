import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';

function ContactList({ state: { contacts, filter }, onDelete }) {
  return (
    <List>
      {contacts
        .filter(c => c.name.toLowerCase().includes(filter))
        .map(c => (
          <ContactItem
            key={c.id}
            name={c.name}
            number={c.number}
            onClickDelete={() => onDelete(c.id)}
          />
        ))}
    </List>
  );
}

export default ContactList;

ContactList.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
