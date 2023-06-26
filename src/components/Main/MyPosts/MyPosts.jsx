import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
  let itemPost = props.posts.map((post) => {
    return (
      <Post
        message={post.message}
        likeCount={post.likeCount}
        dislikeCount={post.dislikeCount}
      />
    );
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let postMessage = newPostElement.current.value;
    props.updateNewPostText(postMessage);
  };

  return (
    <section className={styles.main}>
      <div className={styles.main__wallSection}>
        <h2 className={styles.main__title}>My posts:</h2>
        <textarea
          maxLength="200"
          className={styles.main__textarea}
          placeholder="write somthing..."
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
        />
      </div>

      <div className={styles.main__btnSection}>
        <button className={styles.main__btn} onClick={addPost}>
          Add Post
        </button>
      </div>

      <div className={styles.main__posts}>
        <div className={styles.main__post}>{itemPost}</div>
      </div>
    </section>
  );
};

export default MyPosts;
