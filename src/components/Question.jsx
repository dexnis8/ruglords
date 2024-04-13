/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Question.js
import { useEffect, useState } from "react";

const Question = ({
  question,
  onAnswerCheck,
  onNextQuestion,
  attemptsLeft,
  errorMessage,
  totalQuestions,
  currentQuestion,
  score,
}) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswerCheck(userAnswer);
  };
  useEffect(() => {
    setUserAnswer("");
  }, [question]);

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        Question {currentQuestion}/{totalQuestions}
      </h2>
      <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
      <p className="mb-2">Score: {score}</p>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          className="w-full px-4 py-2 mb-4 border rounded-md"
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder={question.placeholder || "Type your answer..."}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          type="submit"
        >
          Check Answer
        </button>
        {/* <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          type="button"
          onClick={onNextQuestion}
        >
          Next
        </button> */}
      </form>
      <p className="text-gray-500">Attempts left: {attemptsLeft}</p>
    </div>
  );
};

export default Question;
