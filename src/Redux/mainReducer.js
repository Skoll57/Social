// Action Type
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

// Action Creator
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (postMessage) => {
  return { type: UPDATE_NEW_POST_TEXT, postMessage: postMessage };
};

const mainReducer = (state, action) => {
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
