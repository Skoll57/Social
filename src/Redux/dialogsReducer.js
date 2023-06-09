// Action Type
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

// Action Creator
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageTextActionCreator = (messageText) => {
  return { type: UPDATE_MESSAGE_TEXT, messageText: messageText };
};

let initialState = {
  persone: [
    {
      id: 1,
      fullName: "Skoll Sokolov",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZjLyV_KDdDu7o-wlFTQD3kf6E2cqIvQRfFvbDBIRWokc_wK_5pkeNxgHk8_07xfn9Sg&usqp=CAU",
    },
    {
      id: 2,
      fullName: "Ivan Krest",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__5kW0KKHFHa5A8ulgazLinxGvQeYQRNBow&usqp=CAU",
    },
    {
      id: 3,
      fullName: "Julia Sexy",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPOx14pvsWJv5D3eYtZkbKCW1eGBoVewhoA&usqp=CAU",
    },
    {
      id: 4,
      fullName: "Vovka Barchuk",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UB9-_daPV0T1Sw2E7kfEJsyp2VDVFsUWmQ&usqp=CAU",
    },
    {
      id: 5,
      fullName: "Nikita Zadira",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhjC_CIPIkVcqkhvFkvTpRvnaxxfhAN2uMg&usqp=CAU",
    },
    {
      id: 6,
      fullName: "Elen Prekrasnaya",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFtTwXSsU-Pju-DU8LKAf1_422YMvDKCdg6tQ5GyaxmqdPb4F7mU6w7RX4JYai9PyAW2s&usqp=CAU",
    },
  ],
  messages: [
    { id: 1, message: "HI" },
    { id: 2, message: "HELLO" },
    { id: 3, message: "HEY" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
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
