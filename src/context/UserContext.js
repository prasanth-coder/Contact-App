// ThemeContext.js
import React, { createContext, useState,useEffect } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
// Create a context
const UserContext = createContext();

// Create a provider component
export const UserContextProvider = ({ children }) => {
 
 
 const [users,setUsers] = useState([]);
 const [formData, setFormData] = useState({ name: '', email: '' });
 useEffect(() => {
    fetchContacts();
 },[])
 
 //get Contacts
 const fetchContacts = async () => {
    axios.get('http://localhost:3030/contacts')
    .then(res => setUsers(res.data))
    .catch(e => console.log(e))
 }
 
 //delete Contacts
 const deleteContact = async (id) => {
   await axios.delete(`http://localhost:3030/contacts/${id}`)
   .then(() => alert('user deleted'))
   .catch(e => console.log(e));

   fetchContacts();

 }

 //create Contacts

 const CreateContact = async () => {
    await axios.post('http://localhost:3030/contacts',{
        id : uuid(),
        name : formData.name,
        email : formData.email
    }).then(() => {
        alert('Contact Created Successfully');
        fetchContacts();
    }).catch(e => console.log(e))


    setFormData({ name: '', email: '' });

    

 }

 //editContacts

 const editContact = async (id) => {
    await axios.put(`http://localhost:3030/contacts/${id}`,{
        id : id,
        name : formData.name,
        email : formData.email
    }).then(() => {
        alert('Contact Updated Successfully');
        fetchContacts();
    }).catch(e => console.log(e))


    setFormData({ name: '', email: '' });

 }

 //capture inputs

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 
  return (
    <UserContext.Provider value={{ users,deleteContact,formData,setFormData,handleChange,CreateContact,editContact }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
