import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

function App() {

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");

    const zeroFeedback = {
      good: 0,
      neutral: 0,
      bad: 0
    }

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }

    return zeroFeedback;
  });

  const updateFeedback = (feedbackType) => {
      setFeedback({
        ...feedback,
        [feedbackType]: feedback[feedbackType] + 1
      });
  }

  const resetFeedback = () => {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0
      });
  }

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options update={updateFeedback} reset={resetFeedback} total={totalFeedback} />
      {totalFeedback
        ? <Feedback stats={feedback} total={totalFeedback} />
        : <Notification />
      }
    </>
  )
}

export default App
