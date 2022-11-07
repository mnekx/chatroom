import styles from './entry.module.css';

const Entry = () => <form className={styles.Form}><input type="text" placeholder="Name" className={styles.Input} /><button className={styles.Button} type="submit">Enter</button></form>

export default Entry;