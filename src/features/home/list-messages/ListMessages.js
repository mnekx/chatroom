import { useSelector } from "react-redux";
import styles from './list.module.css';
import Message from "./Message";

const ListMessage = () => {
  const messages = useSelector(state => state.messages);
  return (
  <ul className={styles.Root}>{messages.map(((message, index) => <li key={index}><Message message={message}/></li>))}</ul>
)};

export default ListMessage;
