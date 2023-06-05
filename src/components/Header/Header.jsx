import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <a href="#" className={s.signature}>
        Social
      </a>
    </header>
  );
};

export default Header;
