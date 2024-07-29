// // src/Options.js
// import React from "react";

// const Options = ({ feedback, setFeedback }) => {
//   const handleFeedback = (type) => {
//     setFeedback({
//       ...feedback,
//       [type]: feedback[type] + 1,
//     });
//   };

//   return (
//     <div className="options">
//       <button onClick={() => handleFeedback("good")}>Good</button>
//       <button onClick={() => handleFeedback("neutral")}>Neutral</button>
//       <button onClick={() => handleFeedback("bad")}>Bad</button>
//     </div>
//   );
// };

// export default Options;

// src/Options.js

// const Options = ({ updateFeedback }) => {
//   return (
//     <div className="options">
//       <button onClick={() => updateFeedback("good")}>Good</button>
//       <button onClick={() => updateFeedback("neutral")}>Neutral</button>
//       <button onClick={() => updateFeedback("bad")}>Bad</button>
//     </div>
//   );
// };

// export default Options;

// src/Options.js

// const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
//   return (
//     <div className="options">
//       <button onClick={() => updateFeedback("good")}>Good</button>
//       <button onClick={() => updateFeedback("neutral")}>Neutral</button>
//       <button onClick={() => updateFeedback("bad")}>Bad</button>
//       {totalFeedback > 0 && (
//         <button onClick={resetFeedback} className="reset-button">
//           Reset
//         </button>
//       )}
//     </div>
//   );
// };

// export default Options;

// src/Options.js

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className="options">
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className="reset-button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
