/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// CongratsPage.js
// import React from "react";

const CongratsPage = ({ score }) => {
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-green-100 rounded-lg shadow-md">
      <p>
        <span className="font-semibold">Score:</span> {score}/30
      </p>
      <h2 className="text-xl font-semibold text-green-800 mb-4">
        Congratulations! You're a true blob army💥💥!
      </h2>
      {/* Add celebration animation or message */}
    </div>
  );
};

export default CongratsPage;
