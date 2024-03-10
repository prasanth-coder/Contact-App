import React,{useContext} from 'react'
import Form from './Form'
import UserContext from "../context/UserContext";
import { useLocation } from 'react-router-dom';
const EditContact = () => {

  const location = useLocation();
  const { contact } = location.state;

  const {formData,setFormData,handleChange,editContact} = useContext(UserContext);
  return (
    <div>
      <Form formData={formData} setFormData={setFormData} 
      handleChange={handleChange} btnName='Edit' editContact={editContact} state={contact} />
    </div>
  )
}

export default EditContact
