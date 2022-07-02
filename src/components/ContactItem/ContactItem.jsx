import { ListItem } from './ContactItem.styled';
import PropTypes from 'prop-types';

function ContactItem({ name, number }) {
  return (
    <ListItem>
      <span>{name}:</span>
      <span>{number}</span>
    </ListItem>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
