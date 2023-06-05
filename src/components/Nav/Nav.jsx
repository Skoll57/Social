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
        <a className={s.item} href="/news">
          News
        </a>
      </div>
      <div>
        <a className={s.item} href="/music">
          Music
        </a>
      </div>
      <div>
        <a className={s.item} href="/settings">
          Settings
        </a>
      </div>
    </nav>
  );
};

export default Nav;
