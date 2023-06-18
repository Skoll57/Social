import s from "./Friend.module.css";
import { NavLink } from "react-router-dom";

const Friend = (props) => {
  return (
    <div className={s.friend}>
      <div className={s.item}>
        <img src={props.avatar} alt="avatar" />
        <NavLink className={s.fullName} to={"/friend/" + props.id}>
          {props.fullName}
        </NavLink>
      </div>
    </div>
  );
};

export default Friend;
