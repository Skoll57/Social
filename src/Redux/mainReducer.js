// Action Type
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

// Action Creator
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (postMessage) => {
  return { type: UPDATE_NEW_POST_TEXT, postMessage: postMessage };
};

let initialState = {
  posts: [
    {
      message: "Hi! What are you doing?",
      likeCount: 13,
      dislikeCount: 3,
      id: 1,
    },
    {
      message: "Hello! I'am testing props.",
      likeCount: 23,
      dislikeCount: 5,
      id: 2,
    },
    {
      message: "It turns out?",
      likeCount: 8,
      dislikeCount: 1,
      id: 3,
    },
    {
      message:
        "I'm moving towards my goal with small steps... And i need more word! More! more! more! I'm moving towards my goal with small steps... And i need more word! More! more! more!",
      likeCount: 14,
      dislikeCount: 2,
      id: 4,
    },
    {
      message: "I'm happy for you!",
      likeCount: 1,
      dislikeCount: 0,
      id: 5,
    },
  ],
  newPostText: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        message: state.newPostText,
        likeCount: 0,
        dislikeCount: 0,
      };

      if (newPost.message.length >= 1 && newPost.message !== " ") {
        state.posts.push(newPost);
        state.newPostText = "";
      }
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.postMessage;
      return state;

    default:
      return state;
  }
};

export default mainReducer;
