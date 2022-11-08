import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserDispatch } from "../context/user";
import styles from './entry.module.css';
import { enter } from "./users/userSlice";

const Entry = () => {
    const dispatch = useUserDispatch();
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const handleEntry = (e) => {
        e.preventDefault();
        dispatch(enter(name));
        navigate('/home');
    }
  return (
    <form className={styles.Form} onSubmit={(e) => handleEntry(e)}>
      <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} className={styles.Input} />
      <button className={styles.Button} type='submit' >
        Enter
      </button>
    </form>
  );
};

export default Entry;
