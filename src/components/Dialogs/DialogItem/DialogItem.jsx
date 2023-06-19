import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className={s.list}>
      <NavLink
        to={"/dialogs/" + props.id}
        className={(navData) => (navData.isActive ? s.active : s.item)}
      >
        <img src={props.avatar} />
        <br />
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
