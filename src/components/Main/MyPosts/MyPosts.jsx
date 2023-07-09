import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Posts/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/mainReducer";

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
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let postMessage = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(postMessage));
  };

  return (
    <section className={styles.main}>
      <div className={styles.main__wallSection}>
        <h2 className={styles.main__title}>My posts:</h2>
        <textarea
          className={styles.main__textarea}
          maxLength="100"
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
