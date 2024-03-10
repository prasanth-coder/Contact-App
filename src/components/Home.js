import React,{useContext, useState} from 'react';
import Card from './Card';
import UserContext from "../context/UserContext";
import styles from "./Home.module.css";
import Header from './Header';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const {users} = useContext(UserContext);
    const navigate = useNavigate();
    const [name,setName] = useState("");
  return (
    <div>
    <Header />    
    <div className={styles.container}>
      <div style={{margin:'10px'}} className={styles.search}>
        <input placeholder='enter name ..' value={name} onChange={e => setName(e.target.value)}/>
        <button className='btn btn-primary' onClick={() => navigate('/create')}>Add Contacts</button>
      </div>     
     
      {users.length > 0 ? 
      users.map((u) => {
        return(u.name.toLowerCase().includes(name.toLowerCase()) ? <Card key={u.id} u={u}/> : "")
      }) : ""}
      
    </div>
    </div>
  )
}

export default Home
