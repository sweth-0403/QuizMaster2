import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizComponent from "./QuizComponent";
import "./TopicsPage.css";
import Navbar from "../components/Navbar";

// Importing quiz data
import Topic1Data from "../data/Topic1Data";
import Topic2Data from "../data/Topic2Data";
import Topic3Data from "../data/Topic3Data";
import Topic4Data from "../data/Topic4Data";
import Topic5Data from "../data/Topic5Data";

function TopicsPage() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const topics = [
    { name: "Computer Fundamentals & Applications", data: Topic1Data },
    { name: "Programming in C", data: Topic2Data },
    { name: "Digital Electronics", data: Topic3Data },
    { name: "Mathematics for Computer Applications", data: Topic4Data },
    { name: "Business Communication", data: Topic5Data },
  ];

  const handleTopicClick = (topicData) => {
    setSelectedQuestions(topicData);
    setQuizOpen(true);
  };

  return (
    <div className="topics-container">
      <Navbar />
      <h1 className="topics-title">Select a Topic</h1>
      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="topic-card"
            onClick={() => handleTopicClick(topic.data)}
          >
            {topic.name}
          </div>
        ))}
      </div>

      {/* Render Quiz Component as a Pop-up */}
      {quizOpen && (
        <QuizComponent
          onClose={() => setQuizOpen(false)}
          questions={selectedQuestions}
        />
      )}
    </div>
  );
}

export default TopicsPage;
