import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.header__title}>
        Social
      </a>
    </header>
  );
};

export default Header;
