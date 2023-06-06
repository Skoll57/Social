import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <section>
      <div className={s.Dialogs}>
        Dialogs
        <ul className={s.List}>
          <li>Name</li>
          <li>Name</li>
          <li>Name</li>
          <li>Name</li>
          <li>Name</li>
          <li>Name</li>
          <li>Name</li>
          <li>Name</li>
          <li>Name</li>
          <li>Name</li>
        </ul>
      </div>
      <div className={s.Messages}>Messages</div>
    </section>
  );
};

export default Dialogs;
