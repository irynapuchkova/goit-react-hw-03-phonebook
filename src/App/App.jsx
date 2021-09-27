import 'normalize.css';
import shortid from "shortid";

import { Component } from "react";

import { Container, Heading, Title } from './App.styled';
import ContactForm from 'ContactForm/ContactForm';
import Filter from 'Filter/Filter';
import ContactsList from 'ContactsList/ContactsList';

class App extends Component {
    state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }
  
  handleSubmit = ({ name, number }) => {
    const contactsNames = this.state.contacts.map(contact => contact.name);

    if (contactsNames.includes(name)) {
      alert(`${name} is already in Phonebook`)
    } else {
      const contactToAdd = {
      id: shortid.generate(),
      name,
      number
      };

      this.setState(({contacts}) => ({
        contacts: [contactToAdd, ...contacts]
      }))
    }
  }

  changeFilter = (e) => {
    const currentValue = e.currentTarget.value;
    this.setState({ filter: currentValue });
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts
      .filter(contact => contact.name.toLowerCase()
        .includes(normalizedFilter));
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Heading>PhoneBook</Heading>

        <ContactForm
          onSubmitForm={this.handleSubmit}
        />

        <Title type = 'text'>Contacts</Title>
        <Filter
          value = {filter}
          onChange={this.changeFilter}
        />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact = {this.deleteContact} />

      </Container>
    ) 
  }
}

export default App;