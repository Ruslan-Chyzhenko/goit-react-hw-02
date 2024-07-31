//Notification.jsx
import css from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={css.notification}>
      <h2>No feedback given yet</h2>
      <p>Please provide feedback to see the statistics.</p>
    </div>
  );
};

export default Notification;
