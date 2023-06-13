import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  //Data
  let posts = [
    { message: "Hi! What are you doing?", likeCount: 13, dislikeCount: 3 },
    { message: "Hello! I'am testing props.", likeCount: 23, dislikeCount: 5 },
    { message: "It turns out?", likeCount: 8, dislikeCount: 1 },
    {
      message:
        "I'm moving towards my goal with small steps... And i need more word! More! more! more! I'm moving towards my goal with small steps... And i need more word! More! more! more!",
      likeCount: 14,
      dislikeCount: 2,
    },
    { message: "I'm happy for you!", likeCount: 1, dislikeCount: 0 },
  ];
  //Mapping
  let itemPost = posts.map((post) => {
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
      <textarea></textarea>
      <div className={s.btnSection}>
        <button className={s.button}>Add Post</button>
      </div>
      <div>{itemPost}</div>
    </div>
  );
};

export default MyPosts;
