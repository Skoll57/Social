import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
  //Mapping
  let itemPost = props.posts.map((post) => {
    return (
      <Post
        message={post.message}
        likeCount={post.likeCount}
        dislikeCount={post.dislikeCount}
      />
    );
  });

  //Return
  return (
    <div>
      <div className={s.header}>My posts:</div>
      <textarea placeholder="write somthing..."></textarea>
      <div className={s.btnSection}>
        <button className={s.button}>Add Post</button>
      </div>
      <div>{itemPost}</div>
    </div>
  );
};

export default MyPosts;
