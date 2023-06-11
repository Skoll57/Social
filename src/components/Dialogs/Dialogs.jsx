import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div>
      <NavLink
        to={"/dialogs/" + props.route}
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
  return (
    <section>
      <div className={s.dialogs}>
        <h3>Dialogs</h3>
        <ul className={s.list}>
          <li>
            <DialogItem name="Skoll" route="1" />
          </li>
          <li>
            <DialogItem name="Ivan" route="2" />
          </li>
          <li>
            <DialogItem name="Julia" route="3" />
          </li>
          <li>
            <DialogItem name="Vovka" route="4" />
          </li>
          <li>
            <DialogItem name="Nikita" route="5" />
          </li>
          <li>
            <DialogItem name="Elen" route="6" />
          </li>
        </ul>
      </div>
      <div className={s.messages}>
        <h3>Messages</h3>
        <MessageItem messageText="HI" />
        <MessageItem messageText="HELLO" />
        <MessageItem messageText="HEY" />
      </div>
    </section>
  );
};

export default Dialogs;
