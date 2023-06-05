import s from "./MainContent.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Main = () => {
  return (
    <div>
      <div>
        <img
          className={s.image}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRe5xJrGwCVXglXv9U0mxjA0ROxWeZlgQhyQ&usqp=CAU"
        ></img>
      </div>
      <MyPosts />
    </div>
  );
};

export default Main;
