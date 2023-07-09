import styles from "./Dialogs.module.css";
import Dialog from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../Redux/dialogsReducer";

const Dialogs = (props) => {
  let itemDialog = props.dialogsPage.persone.map((persone) => {
    return (
      <Dialog name={persone.fullName} id={persone.id} avatar={persone.avatar} />
    );
  });

  let itemMessage = props.dialogsPage.messages.map((message) => {
    return <MessageItem messageText={message.message} />;
  });

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (event) => {
    let messageText = event.target.value;
    props.dispatch(updateMessageTextActionCreator(messageText));
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
