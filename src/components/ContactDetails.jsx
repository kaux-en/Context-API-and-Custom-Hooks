import React, { useContext } from "react";
import UserContext from "../context/ContactList";
import { useParams } from "react-router-dom";


function ContactDetails() {
    const { contacts } = useContext(UserContext)
    const { name } = useParams();
    const contact = contacts.find(contact => contact.name == name)

    return (
        <div>
        <h2>{contact.name}</h2>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
        </div>
    );
}

export default ContactDetails;