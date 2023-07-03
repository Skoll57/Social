import styles from "./Dialogs.module.css";
import Dialog from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";

const Dialogs = (props) => {
  let itemDialog = props.dialogsPage.persone.map((persone) => {
    return (
      <Dialog name={persone.fullName} id={persone.id} avatar={persone.avatar} />
    );
  });

  let itemMessage = props.dialogsPage.messages.map((message) => {
    return <MessageItem messageText={message.message} />;
  });

  let dialogText = React.createRef();

  let addMessage = () => {
    props.dispatch({ type: "ADD-MESSAGE" });
  };

  let onMessageChange = () => {
    let messageText = dialogText.current.value;
    props.dispatch({ type: "UPDATE-MESSAGE-TEXT", messageText: messageText });
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
            maxLength="70"
            placeholder="Message Text"
            ref={dialogText}
            value={props.dialogsPage.newMessageText}
            onChange={onMessageChange}
          />
          <br />
          <button className={styles.dialogs__btn} onClick={addMessage}>
            Send message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
