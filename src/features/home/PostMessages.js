import styles from './post.module.css';
import SendIcon from '@mui/icons-material/Send';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useUserState } from "../../context/user";

const PostMessage = () => {
  const user = useUserState();
  console.log(user)
  return (
    <Card sx={{ width: '100%', display: 'flex', marginBottom: '1rem' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <IconButton aria-label='user'>
          <AccountBoxIcon />
          <Typography variant='body2'>{user.name}</Typography>
        </IconButton>
      </Box>
      <CardContent>
        <form className={styles.Form}>
          <input
            type='textarea'
            placeholder='enter message'
            className={styles.Input}
          />
          <button type='submit' className={styles.Button}>
            <SendIcon />
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PostMessage;
