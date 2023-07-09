// Action Type
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

// Action Creator
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageTextActionCreator = (messageText) => {
  return { type: UPDATE_MESSAGE_TEXT, messageText: messageText };
};

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageText,
      };

      if (newMessage.message.length >= 1 && newMessage.message !== " ") {
        state.messages.push(newMessage);
        state.newMessageText = "";
      }
      return state;

    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.messageText;
      return state;

    default:
      return state;
  }
};

export default dialogsReducer;
