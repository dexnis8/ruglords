/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// WelcomeComponent.js
import { useState } from "react";

const WelcomeComponent = ({ onStartQuiz }) => {
  const [answeredYes, setAnsweredYes] = useState(false);
  const [answeredNo, setAnsweredNo] = useState(false);

  const handleAnswer = (answer) => {
    if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
      setAnsweredYes(true);
      onStartQuiz();
    } else if (answer.toLowerCase() === "no" || answer.toLowerCase() === "n") {
      setAnsweredNo(true);
    } else {
      alert("Please answer with Yes or No.");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <style>
        {`
          @keyframes backgroundAnimation {
            from {
              background-position: 0 0;
            }
            to {
              background-position: 100% 0;
            }
          }
        `}
      </style>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/background.jpeg')`,
            animation: "backgroundAnimation 60s linear infinite",
            WebkitAnimation: "backgroundAnimation 60s linear infinite",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="flex items-center justify-center mt-10">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Quiz!</h2>
            <p className="mb-4">Would you like to take a quiz?</p>
            <div className="flex gap-3 justify-end">
              <button
                className={`py-2 px-4 rounded-lg border ${
                  answeredYes
                    ? "bg-green-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
                onClick={() => handleAnswer("Yes")}
                disabled={answeredYes || answeredNo}
              >
                Yes
              </button>
              <button
                className={`py-2 px-4 rounded-lg border ${
                  answeredNo
                    ? "bg-red-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
                onClick={() => handleAnswer("No")}
                disabled={answeredYes || answeredNo}
              >
                No
              </button>
            </div>
            {/* {answeredYes && <p className="mt-4">Great! Let's get started!</p>}
            {answeredNo && (
              <p className="mt-4">
                No problem! Come back later if you change your mind.
              </p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
