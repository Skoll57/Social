import rerenderEntireTree from "../render";

let state = {
  mainPage: {
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
  },
  dialogsPage: {
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
  },
  friendsPage: {
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
  },
};

export let addPost = () => {
  let newPost = {
    id: 6,
    message: state.mainPage.newPostText,
    likeCount: 0,
    dislikeCount: 0,
  };

  state.mainPage.posts.push(newPost);
  state.mainPage.newPostText = "";
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: 4,
    message: state.dialogsPage.newMessageText,
  };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (postMessage) => {
  state.mainPage.newPostText = postMessage;
  rerenderEntireTree(state);
};

export let updateMessageText = (messageText) => {
  state.dialogsPage.newMessageText = messageText;
  rerenderEntireTree(state);
};

export default state;
