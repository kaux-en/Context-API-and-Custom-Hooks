import { useState } from 'react'
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisplayContacts from './components/DisplayContacts';
import UserContext from './context/ContactList';
import ProductContext from './context/ProductContext';
import ContactDetails from './components/ContactDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import useInventory from './hook/useInventory';
import ProductForm from './components/ProductForm';
import NavigationBar from './components/NavBar';
import DisplayProducts from './components/ProductList';

function App() {
    
    const [contacts, setContact] = useState(
       [
        {   name: 'contact1', phone: '123-456-7890', email: 'contact1@email.com' },
        {   name: 'contact2', phone: '098-765-4321', email: 'contact2@email.com' },
        {   name: 'contact3', phone: '087-976-8654', email: 'contact3@email.com' },
        {   name: 'contact4', phone: '754-643-5432', email: 'contact4@email.com' },  
    ])

    const [products, setProducts] = useState([
      {name: 'product1', price: '10.99'},
      {name: 'product2', price: '12.50'},
      {name: 'product3', price: '15.99'},
      {name: 'product4', price: '18.99'},
      {name: 'product5', price: '21.50'},
  ])

  return (
    <>

      <UserContext.Provider value={{contacts, setContact }}>
        <ProductContext.Provider value={{products, setProducts}}>
        <Router>
        <NavigationBar />
          <Routes>
           {/* Routes for Contacts */}
           <Route path="/" element={<DisplayContacts />} />
            <Route path="/DisplayContacts" element={<DisplayContacts />} />
            <Route path="/ContactDetails/:name" element={<ContactDetails />} />

            {/* Routes for Products */}
            <Route path="/ProductList" element={<DisplayProducts />} />
            <Route path="/ProductForm" element={<ProductForm />} />
          </Routes>
         </Router>
         </ProductContext.Provider>
      </UserContext.Provider>
  
    </>
  );
}

export default App

