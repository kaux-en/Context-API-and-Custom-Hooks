import React from "react";


const UserContext = React.createContext({
    contacts: [
        {   name: 'contact1', phone: '123-456-7890', email: 'contact1@email.com' },
        {   name: 'contact2', phone: '098-765-4321', email: 'contact2@email.com' },
        {   name: 'contact3', phone: '087-976-8654', email: 'contact3@email.com' },
        {   name: 'contact4', phone: '754-643-5432', email: 'contact4@email.com' },  
    ],
    setContact: () => {}
})

export default UserContext;