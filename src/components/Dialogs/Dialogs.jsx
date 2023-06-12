import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div>
      <NavLink
        to={"/dialogs/" + props.id}
        className={(navData) => (navData.isActive ? s.active : s.item)}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

const MessageItem = (props) => {
  return <div className={s.message}>{props.messageText}</div>;
};

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Skoll" },
    { id: 2, name: "Ivan" },
    { id: 3, name: "Julia" },
    { id: 4, name: "Vovka" },
    { id: 5, name: "Nikita" },
    { id: 6, name: "Elen" },
  ];

  let messagesData = [
    { id: 1, message: "HI" },
    { id: 2, message: "HELLO" },
    { id: 3, message: "HEY" },
  ];

  return (
    <section>
      <div className={s.dialogs}>
        <h3>Dialogs</h3>
        <ul className={s.list}>
          <li>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
          </li>
          <li>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
          </li>
          <li>
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
          </li>
          <li>
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
          </li>
          <li>
            <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
          </li>
          <li>
            <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
          </li>
        </ul>
      </div>
      <div className={s.messages}>
        <h3>Messages</h3>
        <MessageItem messageText={messagesData[0].message} />
        <MessageItem messageText={messagesData[1].message} />
        <MessageItem messageText={messagesData[2].message} />
      </div>
    </section>
  );
};

export default Dialogs;
