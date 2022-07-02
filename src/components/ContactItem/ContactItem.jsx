import { ListItem } from './ContactItem.styled';

function ContactItem({ name, number }) {
  return (
    <ListItem>
      <span>{name}:</span>
      <span>{number}</span>
    </ListItem>
  );
}

export default ContactItem;
