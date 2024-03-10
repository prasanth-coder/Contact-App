import React from 'react';
import styles from './Form.module.css'
import { useNavigate } from 'react-router-dom';


const Form = ({formData,handleChange,btnName,CreateContact,editContact,state}) => {
  
  const navigate = useNavigate();

  return (
    <div className={styles.form}>
       <div id={styles.name}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder={btnName === 'Edit' ? state.name : 'name'}
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div id={styles.email}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder={btnName === 'Edit' ? state.email : 'email'}
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      {btnName === 'Create' ? 
      <button type="submit" onClick={() => {if(formData.name==="" || formData.email===""){
        alert('Please Enter data !!! Fields Cannot be Empty');
        return;
      } CreateContact();navigate('/')}} 
      className="btn btn-primary" id={styles.btn}>{btnName}</button>
      : <button type="submit" onClick={() => {if(formData.name==="" || formData.email===""){
        alert('Please Enter data !!! Fields Cannot be Empty');
        return;
      }editContact(state.id);navigate('/')}} 
      className="btn btn-primary" id={styles.btn}>{btnName}</button>}
    </div>
  )
}

export default Form
