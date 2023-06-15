import s from "./Friend.module.css";

const Friend = () => {
  return (
    <div className={s.friend}>
      <div className={s.item}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/015/390/235/original/bored-ape-nft-isolated-on-white-background-non-fungible-token-blockchain-monkey-illustration-free-vector.jpg"
          alt="avatar"
        />
        <span>FullName FullName</span>
      </div>
    </div>
  );
};

export default Friend;
