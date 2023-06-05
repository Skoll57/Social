import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div>
        <a className={s.item} href="/profile">
          Profile
        </a>
      </div>
      <div>
        <a className={s.item} href="/dialogs">
          Messages
        </a>
      </div>
      <div>
        <a className={s.item}>News</a>
      </div>
      <div>
        <a className={s.item}>Music</a>
      </div>
      <div>
        <a className={s.item}>Settings</a>
      </div>
    </nav>
  );
};

export default Nav;
