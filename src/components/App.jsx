import { Component } from 'react'
import  Form  from './Form/Form'
import { Contacts } from './Contacts/Contacts'
import shortid from "shortid"
import { Section } from './Section/Section'
import { Filter } from './Filter/Filter'
import { Container } from './App.styled';


class App extends Component{
state = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  filter: '',
}
  
  itemId = shortid.generate()

  formSubmitHandler = data => {
    const { name, number } = data
    const findContact = this.state.contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase() && contact.number === number);

    if (findContact) {
      alert (`${name} is already in contact.`)
      return
    }

    const newContact = {
      id: this.itemId,
      ...data,
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }))
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisibleContacts = () => {
    const {filter, contacts} = this.state
    const normalizedFilter = filter.toLowerCase()

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }
 
  
  render() {

    
    const visibleContacts = this.getVisibleContacts()

    return <Container>
      <Section title='Phonebook'>
      <Form onSubmit={ this.formSubmitHandler} />
      </Section>
      <Section title='Contacts'>
        <Filter value={this.state.filter} changeFilter={this.changeFilter} />
        <Contacts contacts={visibleContacts}
          deleteContact={ this.deleteContact} />
      </Section>
    </Container>
  }
}

export default App
