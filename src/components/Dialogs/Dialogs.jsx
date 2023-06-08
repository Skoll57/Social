import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <section>
      <div className={s.dialogs}>
        <h3>Dialogs</h3>
        <ul className={s.list}>
          <li>
            <NavLink
              to="/dialogs/1"
              className={(navData) => (navData.isActive ? s.active : s.item)}
            >
              Name FullName
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dialogs/2"
              className={(navData) => (navData.isActive ? s.active : s.item)}
            >
              Name FullName
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dialogs/3"
              className={(navData) => (navData.isActive ? s.active : s.item)}
            >
              Name FullName
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dialogs/4"
              className={(navData) => (navData.isActive ? s.active : s.item)}
            >
              Name FullName
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dialogs/5"
              className={(navData) => (navData.isActive ? s.active : s.item)}
            >
              Name FullName
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dialogs/6"
              className={(navData) => (navData.isActive ? s.active : s.item)}
            >
              Name FullName
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={s.messages}>
        <h3>Messages</h3>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are tou?</div>
        <div className={s.message}>Iam just a testing page</div>
      </div>
    </section>
  );
};

export default Dialogs;
