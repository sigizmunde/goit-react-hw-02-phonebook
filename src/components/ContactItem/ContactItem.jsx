import { ListItem } from './ContactItem.styled';

function ContactItem({ name }) {
  return (
    <ListItem>
      <span>{name}</span>
    </ListItem>
  );
}

export default ContactItem;
