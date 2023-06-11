import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  return (
    <div>
      <div className={s.header}>My posts:</div>
      <div>
        <textarea></textarea>
      </div>
      <div className={s.btnSection}>
        <button>Add Post</button>
      </div>
      <div>
        <Post message="Hi! What are you doing?" count="1" />
        <Post message="Hello! I'am testing props" count="1" />
        <Post message="Hello! I'am testing props" count="1" />
        <Post message="Hello! I'am testing props" count="1" />
        <Post message="Hello! I'am testing props" count="1" />
      </div>
    </div>
  );
};

export default MyPosts;
