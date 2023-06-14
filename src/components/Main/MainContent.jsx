import s from "./MainContent.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Main = (props) => {
  return (
    <div className={s.main}>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Main;
