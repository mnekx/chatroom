import { useSelector } from "react-redux";
import { useUserState } from "../../../context/user";
import styles from './list.module.css';
import Message from "./Message";

const ListMessage = () => {
  const currUser = useUserState();
  const messages = useSelector(state => state.messages);
  return (
  <ul className={styles.Root}>{messages.map(((message, index) => <li className={currUser.name===message.user?styles.Mine: ''} key={index}><Message message={message}/></li>))}</ul>
)};

export default ListMessage;
