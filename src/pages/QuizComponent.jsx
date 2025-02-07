import React, { useState } from "react";
import "./QuizComponent.css";

function QuizComponent({ onClose, questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div className="quiz-overlay">
        <div className="quiz-popup">
          <button className="close-btn" onClick={onClose}>
            X
          </button>
          <p className="error-text">No quiz data available.</p>
        </div>
      </div>
    );
  }

  const handleAnswerClick = (answer) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
      if (answer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
      saveScore(score + 1); // Save the final score when quiz ends
    }
  };

  const saveScore = (finalScore) => {
    const storedScores = JSON.parse(localStorage.getItem("quizScores")) || [];
    storedScores.push(finalScore);
    localStorage.setItem("quizScores", JSON.stringify(storedScores));
  };

  const getCompliment = () => {
    if (score === questions.length) return "Excellent job! 🎉";
    if (score > questions.length / 2) return "Good work! 👍";
    return "Keep practicing! 💡";
  };

  return (
    <div className="quiz-overlay">
      <div className="quiz-popup">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        {!quizFinished ? (
          <>
            <h2>{questions[currentQuestion]?.question}</h2>
            <div className="options-container">
              {questions[currentQuestion]?.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-btn ${
                    selectedAnswer !== null
                      ? option === questions[currentQuestion].correctAnswer
                        ? "correct"
                        : option === selectedAnswer
                        ? "wrong"
                        : ""
                      : ""
                  }`}
                  onClick={() => handleAnswerClick(option)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              className="next-btn"
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
            >
              Next
            </button>
          </>
        ) : (
          <div className="score-box">
            <h2>Quiz Completed!</h2>
            <p className="score-text">
              Your Score: {score} / {questions.length}
            </p>
            <p className="compliment">{getCompliment()}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizComponent;
