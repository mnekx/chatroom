import styles from './post.module.css';

const PostMessage = () => <form className={styles.Form}><input type='textarea' placeholder="enter message"/><button type="submit">post</button></form>

export default PostMessage