import 'normalize.css';

import shortid from 'shortid';

import { Component } from 'react';

import { Container, Heading, Title } from './App.styled';
import ContactForm from 'Components/ContactForm/ContactForm';
import Filter from 'Components/Filter/Filter';
import ContactsList from 'Components/ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localStorageData = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localStorageData);
    console.log(parsedContacts);
    if (parsedContacts) {
      this.setState({ contacts: [...this.state.contacts, ...parsedContacts] });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleSubmit = ({ name, number }) => {
    const contactsNames = this.state.contacts.map(contact => contact.name);

    if (contactsNames.includes(name)) {
      alert(`${name} is already in Phonebook`);
    } else {
      const contactToAdd = {
        id: shortid.generate(),
        name,
        number,
      };

      this.setState(({ contacts }) => ({
        contacts: [contactToAdd, ...contacts],
      }));
    }
  };

  handleFilter = filter => {
    this.setState({ filter });
  };

  handleBlur = () => {
    this.setState({ filter: '' });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    console.log(contacts);
    const normalizedFilter = filter.toLowerCase();
    console.log(normalizedFilter);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Heading>PhoneBook</Heading>

        <ContactForm onSubmitForm={this.handleSubmit} />

        <Title type="text">Contacts</Title>
        <Filter
          type="text"
          value={filter}
          onChange={e => this.handleFilter(e.target.value)}
        />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
