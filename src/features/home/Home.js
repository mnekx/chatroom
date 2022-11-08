import ListMessage from './list-messages/ListMessages';
import PostMessage from './PostMessages';
import styles from './home.module.css';

const Home = () => (
  <div className={styles.Root}>
    <ListMessage />
    <PostMessage />
  </div>
);

export default Home;
