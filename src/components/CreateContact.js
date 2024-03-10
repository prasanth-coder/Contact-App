import React,{useContext} from 'react';
import Form from './Form';
import UserContext from "../context/UserContext";

const CreateContact = () => {
  const {formData,setFormData,handleChange,CreateContact} = useContext(UserContext);
  return (
    <div>
      <div>
        <p className='h2' style={{textAlign:'center'}}>Create Contact</p>
      </div>
      <Form formData={formData} setFormData={setFormData} 
      handleChange={handleChange} btnName='Create' CreateContact={CreateContact} />
      
    </div>
  )
}

export default CreateContact
