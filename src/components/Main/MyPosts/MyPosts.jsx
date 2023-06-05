import "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
      </div>
      <div>
        <span>
          <button>Add Post</button>
        </span>
        <span>
          <button>Remove</button>
        </span>
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
