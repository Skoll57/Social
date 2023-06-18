import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  // Mapping
  let itemDialogs = props.state.persone.map((persone) => {
    return (
      <li>
        <DialogItem
          name={persone.fullName}
          id={persone.id}
          avatar={persone.avatar}
        />
      </li>
    );
  });

  let itemMessages = props.state.messages.map((message) => {
    return <MessageItem messageText={message.message} />;
  });

  //Return
  return (
    <section>
      <div className={s.dialogs}>
        <h3>Dialogs</h3>
        <div className={s.item}>{itemDialogs}</div>
      </div>

      <div className={s.messages}>
        <h3>Messages</h3>
        {itemMessages}
      </div>
    </section>
  );
};

export default Dialogs;
