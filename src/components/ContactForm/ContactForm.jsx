import React from 'react';
import { Form } from './ContactForm.styled';

class ContactForm extends React.Component {
  DEFAULT_STATE = {
    name: '',
  };

  state = {
    name: '',
  };

  clearForm = () => this.setState(this.DEFAULT_STATE);

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ contact: this.state });
    this.clearForm();
  };

  render() {
    console.log(this.props);
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
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

export default ContactForm;
