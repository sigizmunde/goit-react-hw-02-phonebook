import React from 'react';
import { Form } from './ContactForm.styled';
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
  DEFAULT_STATE = {
    name: '',
    number: '',
  };

  state = {
    name: '',
    number: '',
  };

  clearForm = () => this.setState(this.DEFAULT_STATE);

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ contact: this.state, onSuccess: this.clearForm });
    // form clears only on success
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          {'Name '}
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          {'Phone '}
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

export default ContactForm;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
