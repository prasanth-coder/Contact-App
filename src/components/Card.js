import React,{useContext} from 'react';
import styles from "./Card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import UserContext from "../context/UserContext";
import { Link } from 'react-router-dom';

const Card = ({u}) => {
    const {deleteContact} = useContext(UserContext);
  return (
    <div className={styles.container}>
      <div className={styles.cardcontainer1}>
        <div className='prof-icon'>
           <FontAwesomeIcon icon={faUserCircle} size="2x" style={{margin:'10px'}} />
        </div>
        <div>
            <div>
              {u.name}
            </div>
            <div>
              {u.email} 
            </div>
             
        </div>
      
      </div>
      <div className={styles.cardcontainer2}>
        <div>
        <button>
        <Link to={'/edit'} state={{contact : u}}>
          <FontAwesomeIcon icon={faEdit} />
        </Link>
      </button>
        </div>
        <div>
        <button onClick={() => deleteContact(u.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
      </div>
    </div>
  )
}

export default Card
