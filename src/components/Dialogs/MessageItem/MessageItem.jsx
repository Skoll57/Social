import styles from "./MessageItem.module.css";

const MessageItem = (props) => {
  return (
    <section className={styles.message}>
      <div className={styles.message__item}>
        {props.messageText} Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Voluptas optio commodi ipsam molestiae repellendus perferendis a
        iusto explicabo officia obcaecati? Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Ducimus earum accusamus perspiciatis
        libero odit laborum esse exercitationem? Numquam quam doloribus ipsa
        optio labore voluptas perferendis corrupti perspiciatis delectus ipsum.
        Voluptatibus!
      </div>
      <div className={styles.message__date}>24 июня 2018</div>
    </section>
  );
};

export default MessageItem;
