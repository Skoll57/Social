import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.imgAndMessage}>
        <div className={s.image}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZjLyV_KDdDu7o-wlFTQD3kf6E2cqIvQRfFvbDBIRWokc_wK_5pkeNxgHk8_07xfn9Sg&usqp=CAU"
            alt=""
          />
        </div>
        <div className={s.message}> {props.message} </div>
      </div>

      <div className={s.buttons}>
        <button>Like({props.likeCount})</button>
        <button>Dislike({props.dislikeCount})</button>
      </div>
    </div>
  );
};

export default Post;
