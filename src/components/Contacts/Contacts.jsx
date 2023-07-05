


export const Contacts = ({ contacts }) => {

    return <ul>
        {contacts.map(({ name, id, number }) => <li key={id}>
            <p>{name} : {number }</p>
        </li>)}
    </ul>
}