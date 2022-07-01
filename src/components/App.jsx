import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { VertFlexSection } from './App.styled';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [],
  };

  handleContactFormSubmit = ({ contact }) => {
    const { name } = contact;
    this.setState(state => {
      console.log(contact);
      return { contacts: [...state.contacts, { id: nanoid(), name }] };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
          backgroundColor: 'var(--back-color-2)',
        }}
      >
        <VertFlexSection>
          <h2>Phonebook</h2>
          <ContactForm onSubmit={this.handleContactFormSubmit} />
          <h3>Contacts</h3>
          <ContactList contacts={this.state.contacts} />
        </VertFlexSection>
      </div>
    );
  }
}
