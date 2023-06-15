let state = {
  mainPage: {
    posts: [
      { message: "Hi! What are you doing?", likeCount: 13, dislikeCount: 3 },
      { message: "Hello! I'am testing props.", likeCount: 23, dislikeCount: 5 },
      { message: "It turns out?", likeCount: 8, dislikeCount: 1 },
      {
        message:
          "I'm moving towards my goal with small steps... And i need more word! More! more! more! I'm moving towards my goal with small steps... And i need more word! More! more! more!",
        likeCount: 14,
        dislikeCount: 2,
      },
      { message: "I'm happy for you!", likeCount: 1, dislikeCount: 0 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Skoll" },
      { id: 2, name: "Ivan" },
      { id: 3, name: "Julia" },
      { id: 4, name: "Vovka" },
      { id: 5, name: "Nikita" },
      { id: 6, name: "Elen" },
    ],
    messages: [
      { id: 1, message: "HI" },
      { id: 2, message: "HELLO" },
      { id: 3, message: "HEY" },
    ],
  },
};

export default state;
