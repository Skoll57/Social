import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  let postsData = [
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

  return (
    <div>
      <div className={s.header}>My posts:</div>
      <div>
        <textarea></textarea>
      </div>
      <div className={s.btnSection}>
        <button className={s.button}>Add Post</button>
      </div>
      <div>
        <Post
          message={postsData[0].message}
          likeCount={postsData[0].likeCount}
          dislikeCount={postsData[0].dislikeCount}
        />
        <Post
          message={postsData[1].message}
          likeCount={postsData[1].likeCount}
          dislikeCount={postsData[1].dislikeCount}
        />

        <Post
          message={postsData[2].message}
          likeCount={postsData[2].likeCount}
          dislikeCount={postsData[2].dislikeCount}
        />
        <Post
          message={postsData[3].message}
          likeCount={postsData[3].likeCount}
          dislikeCount={postsData[3].dislikeCount}
        />
        <Post
          message={postsData[4].message}
          likeCount={postsData[4].likeCount}
          dislikeCount={postsData[4].dislikeCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
