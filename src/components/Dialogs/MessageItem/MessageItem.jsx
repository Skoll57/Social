import s from "./MessageItem.module.css";

const MessageItem = (props) => {
  return <div className={s.message}>{props.messageText}</div>;
};

export default MessageItem;
