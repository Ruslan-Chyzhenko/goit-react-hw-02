//Options.jsx
import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={css.options}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={css["reset-button"]}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
