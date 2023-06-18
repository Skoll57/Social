import s from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
  // Mapping
  let friendItem = props.state.persone.map((friend) => {
    return (
      <Friend
        fullName={friend.fullName}
        id={friend.id}
        avatar={friend.avatar}
      />
    );
  });

  return (
    <div className={s.container}>
      <h2 className={s.header}>My friends:</h2>
      <div className={s.itemBox}>
        <span className={s.item}>{friendItem}</span>
      </div>
    </div>
  );
};

export default Friends;
