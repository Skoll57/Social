import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = () => {
  // Data
  let dialogs = [
    { id: 1, name: "Skoll" },
    { id: 2, name: "Ivan" },
    { id: 3, name: "Julia" },
    { id: 4, name: "Vovka" },
    { id: 5, name: "Nikita" },
    { id: 6, name: "Elen" },
  ];

  let messages = [
    { id: 1, message: "HI" },
    { id: 2, message: "HELLO" },
    { id: 3, message: "HEY" },
  ];
  // Mapping
  let itemDialogs = dialogs.map((dialog) => {
    return (
      <li>
        <DialogItem name={dialog.name} id={dialog.id} />
      </li>
    );
  });

  let itemMessages = messages.map((message) => {
    return <MessageItem messageText={message.message} />;
  });
  //Return
  return (
    <section>
      <div className={s.dialogs}>
        <h3>Dialogs</h3>
        <ul className={s.list}>{itemDialogs}</ul>
      </div>
      <div className={s.messages}>
        <h3>Messages</h3>
        {itemMessages}
      </div>
    </section>
  );
};

export default Dialogs;
