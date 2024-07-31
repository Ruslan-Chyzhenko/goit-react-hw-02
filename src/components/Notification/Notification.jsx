//Notification.jsx
import css from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={css.notification}>
      <h2>No feedback yet</h2>
      <p>Please provide feedback</p>
    </div>
  );
};

export default Notification;
