import styles from "./MainContent.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Main = (props) => {
  return (
    <div className={styles.main}>
      <ProfileInfo />
      <MyPosts
        posts={props.mainPage.posts}
        newPostText={props.mainPage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Main;
