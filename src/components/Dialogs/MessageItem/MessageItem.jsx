import styles from "./MessageItem.module.css";

const MessageItem = (props) => {
  return (
    <section className={styles.message}>
      <div className={styles.message__item}>{props.messageText}</div>
      <div className={styles.message__date}>24 июня 2018</div>
    </section>
  );
};

export default MessageItem;
