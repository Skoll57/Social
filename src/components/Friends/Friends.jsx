import s from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = () => {
  return (
    <div className={s.friends}>
      <h2 className={s.header}>My friends:</h2>
      <div className={s.itemBox}>
        <span className={s.item}>{<Friend />}</span>
        <span className={s.item}>{<Friend />}</span>
        <span className={s.item}>{<Friend />}</span>
        <span className={s.item}>{<Friend />}</span>
        <span className={s.item}>{<Friend />}</span>
        <span className={s.item}>{<Friend />}</span>
      </div>
    </div>
  );
};

export default Friends;
