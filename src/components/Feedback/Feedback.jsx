//Feedback.jsx
import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <div className={css.feedback}>
      <h2>Feedback Statistics</h2>
      <p>
        Good: <span>{feedback.good}</span>
      </p>
      <p>
        Neutral: <span>{feedback.neutral}</span>
      </p>
      <p>
        Bad: <span>{feedback.bad}</span>
      </p>
      <p>
        Total feedback: <span>{totalFeedback}</span>
      </p>
      <p>
        Positive feedback: <span>{positiveFeedbackPercentage}%</span>
      </p>
    </div>
  );
};

export default Feedback;
