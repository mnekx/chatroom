import styles from './post.module.css';
import SendIcon from '@mui/icons-material/Send';

const PostMessage = () => (
  <form className={styles.Form}>
    <input type='textarea' placeholder='enter message' className={styles.Input}/>
    <button type='submit' className={styles.Button}><SendIcon/></button>
  </form>
);

export default PostMessage;
