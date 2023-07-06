import PropTypes from 'prop-types'
import { ContactItem } from "components/ContactItem/ContactItem"
import { List } from './Contacts.styled'

export const Contacts = ({ contacts,deleteContact }) => {

    return (<List>
        {contacts.map(({ id, name, number }) => (
            <ContactItem key={id}
                id={id}
                name={name}
                number={number}
                deleteContact={ deleteContact} />
            
        ))}
    </List>)
}

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}