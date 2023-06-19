import styles from "./Dialogs.module.css";
import Dialog from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";

const Dialogs = (props) => {
  let itemDialog = props.state.persone.map((persone) => {
    return (
      <Dialog name={persone.fullName} id={persone.id} avatar={persone.avatar} />
    );
  });

  let itemMessage = props.state.messages.map((message) => {
    return <MessageItem messageText={message.message} />;
  });

  let messageText = React.createRef();

  let getText = () => {
    console.log(messageText.current.value);
  };

  return (
    <section className={styles.dialogs}>
      <div className={styles.dialogs__item}>
        <h3 className={styles.dialogs__title}>Dialogs</h3>
        <div className={styles.dialogs__dialog}>{itemDialog}</div>
      </div>

      <div className={styles.dialogs__messages}>
        <div className={styles.dialogs__messageItem}>
          <h3 className={styles.dialogs__title}>Messages</h3>
          <div className={styles.dialogs__message}>{itemMessage}</div>
        </div>

        <div className={styles.dialogs__inputItem}>
          <textarea
            className={styles.dialogs__textarea}
            ref={messageText}
          ></textarea>
          <br />
          <button className={styles.dialogs__btn} onClick={getText}>
            Send message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
