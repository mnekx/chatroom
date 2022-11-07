import styles from './list.module.css';
import Message from "./Message";

const ListMessage = () => {
  const messages = [];
  for(let i=0; i<50; i++) {
    messages.push('Message '+i);
  }
  console.log(messages);
  return (
  <ul className={styles.Root}>{messages.map((message => <li><Message/></li>))}</ul>
)};

export default ListMessage;
