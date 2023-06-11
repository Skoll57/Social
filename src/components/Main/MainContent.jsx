import s from "./MainContent.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Main = () => {
  return (
    <div className={s.main}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Main;
