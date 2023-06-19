import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <section className={styles.profile}>
      <img
        className={styles.profile__image}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRe5xJrGwCVXglXv9U0mxjA0ROxWeZlgQhyQ&usqp=CAU"
      ></img>
    </section>
  );
};

export default ProfileInfo;
