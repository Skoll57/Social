let store = {
  _state: {
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
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // For storage changes
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 6,
        message: this._state.mainPage.newPostText,
        likeCount: 0,
        dislikeCount: 0,
      };

      if (newPost.message.length >= 1 && newPost.message !== " ") {
        this._state.mainPage.posts.push(newPost);
        this._state.mainPage.newPostText = "";
        this._callSubscriber(this._state);
      }
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: 4,
        message: this._state.dialogsPage.newMessageText,
      };

      if (newMessage.message.length >= 1 && newMessage.message !== " ") {
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber(this._state);
      }
    } else if (action.type === "UPDATE-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessageText = action.messageText;
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.mainPage.newPostText = action.postMessage;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
