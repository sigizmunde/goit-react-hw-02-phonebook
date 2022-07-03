import React from 'react';
// import ContactForm from './ContactForm/ContactForm';
import ContactFormikForm from './ContactFormikForm/ContactFormikForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { VertFlexSection } from './App.styled';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleContactFormSubmit = ({ contact, onSuccess }) => {
    const { name, number } = contact;
    const successCondition = !this.state.contacts.filter(
      c => c.name.toLowerCase() === name.toLowerCase()
    ).length;
    if (successCondition) {
      this.setState(state => {
        return {
          contacts: [...state.contacts, { id: nanoid(), name, number }],
        };
      });
      onSuccess();
      // function to perform in ContactForm
    } else {
      alert(name + ' is alreadey in contacts');
    }
  };

  handleFilterChange = ({ filter }) => {
    this.setState({ filter });
  };

  deleteContact = id => {
    this.setState(state => {
      return {
        contacts: state.contacts.filter(c => c.id !== id),
      };
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
          <ContactFormikForm onSubmit={this.handleContactFormSubmit} />
          <h3>Contacts</h3>
          <Filter onChange={this.handleFilterChange} />
          <ContactList state={this.state} onDelete={this.deleteContact} />
        </VertFlexSection>
      </div>
    );
  }
}
