import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <section>
      <div className={s.dialogs}>
        <h3>Dialogs</h3>
        <ul className={s.list}>
          <li className={s.item}>Name</li>
          <li className={s.item}>Name</li>
          <li className={s.item}>Name</li>
          <li className={s.item}>Name</li>
          <li className={s.item}>Name</li>
          <li className={s.item}>Name</li>
          <li className={s.item}>Name</li>
          <li className={s.item}>Name</li>
          <li className={s.item}>Name</li>
          <li className={s.item}>Name</li>
        </ul>
      </div>
      <div className={s.messages}>
        <h3>Messages</h3>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are tou?</div>
        <div className={s.message}>Iam just a testing page</div>
      </div>
    </section>
  );
};

export default Dialogs;
