// // src/App.js
// import React, { useState } from "react";
// import Feedback from "./Feedback";
// import Options from "./Options";

// const App = () => {
//   const [feedback, setFeedback] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

//   return (
//     <div className="App">
//       <h1>Sip Happens Café</h1>
//       <p>
//         Please leave your feedback about our service by selecting one of the
//         options below.
//       </p>
//       <Options feedback={feedback} setFeedback={setFeedback} />
//       <Feedback feedback={feedback} />
//     </div>
//   );
// };

// export default App;

// // src/App.js
// import React, { useState } from "react";
// import Feedback from "./components/Feedback/Feedback";
// import Options from "./components/Options/Options";
// import "./App.css";

// const App = () => {
//   const [feedback, setFeedback] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

//   const updateFeedback = (feedbackType) => {
//     setFeedback((prevFeedback) => ({
//       ...prevFeedback,
//       [feedbackType]: prevFeedback[feedbackType] + 1,
//     }));
//   };

//   return (
//     <div className="App">
//       <h1>Sip Happens Café</h1>
//       <p>
//         Please leave your feedback about our service by selecting one of the
//         options below.
//       </p>
//       <Options updateFeedback={updateFeedback} />
//       <Feedback feedback={feedback} />
//     </div>
//   );
// };

// export default App;

// src/App.js
// import React, { useState } from "react";
// import Feedback from "./Feedback";
// import Options from "./Options";
// import Notification from "./Notification";
// import "./App.css"; // Не забудьте імплементувати стилі

// const App = () => {
//   const [feedback, setFeedback] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

//   const updateFeedback = (feedbackType) => {
//     setFeedback((prevFeedback) => ({
//       ...prevFeedback,
//       [feedbackType]: prevFeedback[feedbackType] + 1,
//     }));
//   };

//   const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

//   return (
//     <div className="App">
//       <h1>Sip Happens Café</h1>
//       <p>
//         Please leave your feedback about our service by selecting one of the
//         options below.
//       </p>
//       <Options updateFeedback={updateFeedback} />
//       {totalFeedback > 0 ? <Feedback feedback={feedback} /> : <Notification />}
//     </div>
//   );
// };

// export default App;

// src/App.js
// import React, { useState } from "react";
// import Feedback from "./Feedback";
// import Options from "./Options";
// import Notification from "./Notification";
// import "./App.css";

// const App = () => {
//   const [feedback, setFeedback] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

//   const updateFeedback = (feedbackType) => {
//     setFeedback((prevFeedback) => ({
//       ...prevFeedback,
//       [feedbackType]: prevFeedback[feedbackType] + 1,
//     }));
//   };

//   const resetFeedback = () => {
//     setFeedback({
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     });
//   };

//   const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

//   return (
//     <div className="App">
//       <h1>Sip Happens Café</h1>
//       <p>
//         Please leave your feedback about our service by selecting one of the
//         options below.
//       </p>
//       <Options
//         updateFeedback={updateFeedback}
//         resetFeedback={resetFeedback}
//         totalFeedback={totalFeedback}
//       />
//       {totalFeedback > 0 ? <Feedback feedback={feedback} /> : <Notification />}
//     </div>
//   );
// };

// export default App;

// src/App.js
// import React, { useState } from "react";
// import Feedback from "./Feedback";
// import Options from "./Options";
// import Notification from "./Notification";
// import "./App.css"; // Не забудьте імплементувати стилі

// const App = () => {
//   const [feedback, setFeedback] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

//   const updateFeedback = (feedbackType) => {
//     setFeedback((prevFeedback) => ({
//       ...prevFeedback,
//       [feedbackType]: prevFeedback[feedbackType] + 1,
//     }));
//   };

//   const resetFeedback = () => {
//     setFeedback({
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     });
//   };

//   const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
//   const positiveFeedbackPercentage = totalFeedback
//     ? Math.round((feedback.good / totalFeedback) * 100)
//     : 0;

//   return (
//     <div className="App">
//       <h1>Sip Happens Café</h1>
//       <p>
//         Please leave your feedback about our service by selecting one of the
//         options below.
//       </p>
//       <Options
//         updateFeedback={updateFeedback}
//         resetFeedback={resetFeedback}
//         totalFeedback={totalFeedback}
//       />
//       {totalFeedback > 0 ? (
//         <Feedback
//           feedback={feedback}
//           totalFeedback={totalFeedback}
//           positiveFeedbackPercentage={positiveFeedbackPercentage}
//         />
//       ) : (
//         <Notification />
//       )}
//     </div>
//   );
// };

// export default App;

// src/App.js
import React, { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import css from "./App.module.css";

const App = () => {
  // Ініціалізуємо стан з локального сховища або з нульовими значеннями
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    // Оновлюємо локальне сховище, коли стан змінюється
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div className="App">
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
