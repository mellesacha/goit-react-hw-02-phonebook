import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

export class App extends Component {

  state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
  }

  onAddContact = (contact) => {
    const newContact = {
      ...contact,
      id: nanoid()
    }
  
    this.setState(prevState => 
      this.state.contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())
          ? (alert(`${newContact.name} is already in contacts`))
          : { contacts: [...prevState.contacts, { ...newContact }] }
    )
  }

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  hendlInputFilter = (e) => {
    this.setState({ filter: e.target.value })
  }


  render()
  {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
 <div>
  <h1>Phonebook</h1>
        <ContactForm addContact={this.onAddContact } />

  <h2>Contacts</h2>
        <Filter search={filter}  hendlInput={this.hendlInputFilter}/>
        <ContactList contacts={filteredContacts} onDeleteContact={ this.deleteContact} />
</div>
    )
  
   
  }
};
