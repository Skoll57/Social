import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <img
        className={s.image}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRe5xJrGwCVXglXv9U0mxjA0ROxWeZlgQhyQ&usqp=CAU"
      ></img>
    </div>
  );
};

export default ProfileInfo;
