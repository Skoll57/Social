import styles from "./Post.module.css";
// import styles from "./icons/like.png";

const Post = (props) => {
  return (
    <section className={styles.post}>
      <div className={styles.post__item}>
        <div className={styles.post__profileInfo}>
          <img
            className={styles.post__avatar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZjLyV_KDdDu7o-wlFTQD3kf6E2cqIvQRfFvbDBIRWokc_wK_5pkeNxgHk8_07xfn9Sg&usqp=CAU"
            alt=""
          />
          <p className={styles.post__fullName}>FullName FullName</p>
        </div>

        <div className={styles.post__messages}>
          <div className={styles.post__message}>{props.message}</div>
        </div>

        <div className={styles.post__footer}>
          <button className={styles.post__btn}>like({props.likeCount})</button>
          <button className={styles.post__btn}>
            dislike({props.dislikeCount})
          </button>

          <div className={styles.post__date}>
            <p className={styles.post__dateItem}>{props.date}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
