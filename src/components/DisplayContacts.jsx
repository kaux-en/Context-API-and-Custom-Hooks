import React, { useContext } from "react";
import UserContext from "../context/ContactList";
import { useParams, Link } from 'react-router-dom';
import { Container } from "react-bootstrap";


function DisplayContacts() {
    const { contacts } = useContext(UserContext);
    const { name } = useParams();


    return (

        <Container>
            <ul>
                {   
                contacts.map(contact => (
                    <li key={contact.name}>    
                        <p><Link to={`/ContactDetails/${contact.name}`}>{contact.name}</Link></p>
                    </li>
                ))
                }
            </ul>
        </Container>
    );
}

export default DisplayContacts;