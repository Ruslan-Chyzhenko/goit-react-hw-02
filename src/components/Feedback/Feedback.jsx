// src/Feedback.js

// const Feedback = ({ feedback }) => {
//   return (
//     <div className="feedback">
//       <h2>Feedback Statistics</h2>
//       <p>Good: {feedback.good}</p>
//       <p>Neutral: {feedback.neutral}</p>
//       <p>Bad: {feedback.bad}</p>
//     </div>
//   );
// };

// export default Feedback;

// src/Feedback.js

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <div className="feedback">
      <h2>Feedback Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedbackPercentage}%</p>
    </div>
  );
};

export default Feedback;
