import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZjLyV_KDdDu7o-wlFTQD3kf6E2cqIvQRfFvbDBIRWokc_wK_5pkeNxgHk8_07xfn9Sg&usqp=CAU" />
      {props.message}
      <div>
        <span>Like({props.count})</span>
        <span>Dislike({props.count})</span>
      </div>
    </div>
  );
};

export default Post;
