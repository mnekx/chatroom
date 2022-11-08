import styles from './post.module.css';
import SendIcon from '@mui/icons-material/Send';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useUserState } from "../../context/user";
import {add} from '../messages/messagesSlice'
import { useDispatch } from "react-redux";
import { useState } from "react";

const PostMessage = () => {
  const currUser = useUserState();
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const handleAdd = (e) => {
    e.preventDefault();
    const user = currUser.name
    dispatch(add({user, message}));
  }
  return (
    <Card sx={{ width: '100%', display: 'flex', marginBottom: '1rem', justifyContent: 'space-around' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, width: '6%', padding: 0 }}>
        <IconButton aria-label='user' sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
          <AccountCircleRoundedIcon sx={{width: '100%'}}/>
          <Typography variant='body2'>{currUser.name}</Typography>
        </IconButton>
      </Box>
        <form className={styles.Form} onSubmit={(e)=>handleAdd(e)}>
          <input
            type='textarea'
            placeholder='enter message'
            className={styles.Input}
            onChange={(e)=>setMessage(e.target.value)}
            required
          />
          <button type='submit' className={styles.Button}>
            <SendIcon />
          </button>
        </form>
    </Card>
  );
};

export default PostMessage;
