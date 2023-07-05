import { Component } from 'react'
import  Form  from 'components/Phonebook/Phonebook'
import { Contacts } from './Contacts/Contacts'
import shortid from "shortid"
import { Section } from './Section/Section'

class App extends Component{
state = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  
}
  
  itemId = shortid.generate()

  formSubmitHandler = data => {
    const newContact = {
      id: this.itemId,
      ...data,
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }))
  }


 
  
  render() {
    return <div>
      <Section title='Phonebook'>
      <Form onSubmit={ this.formSubmitHandler} />
      </Section>
      <Section title='Contacts'>
      <Contacts contacts={this.state.contacts}/>
      </Section>
    </div>
  }
}

export default App
