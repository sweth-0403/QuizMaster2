import React from "react";
import "./About.css";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div className="about-container">
      <Navbar />

      <p className="about-description">
        Welcome to **QuizMaster** - a perfect platform to help you revise and
        test your knowledge in a variety of technical topics. Our application
        provides quizzes designed to help you assess your understanding and
        track your learning progress.
      </p>

      <h2 className="about-subtitle">Why QuizMaster? 🤔</h2>
      <ul className="about-benefits">
        <li>
          🎯 **Targeted Learning**: Take quizzes on specific syllabus topics and
          focus on what matters most for your exams and assessments.
        </li>
        <li>
          📈 **Track Your Progress**: View your past quiz scores, track
          improvements, and pinpoint areas for further study.
        </li>
        <li>
          🧠 **Engaging & Interactive**: Improve your knowledge with interactive
          quizzes that help you learn through practice.
        </li>
        <li>
          🏆 **Challenge Yourself**: With regular quizzes, test yourself
          regularly to keep your knowledge sharp and ready for any challenge.
        </li>
        <li>
          💡 **Instant Feedback**: Get immediate feedback on your answers, with
          color-coded responses indicating correct and incorrect options.
        </li>
      </ul>

      <h2 className="about-subtitle">How It Works 🛠️</h2>
      <p className="about-description">
        It's simple! After logging in, you'll have access to a dashboard where
        you can choose from 6 semesters. Each semester contains 10 topics. Click
        on any topic to start a quiz, answer questions, and get your score at
        the end. You'll also be able to view your past scores in the profile
        section to see how much you've improved.
      </p>

      <h2 className="about-subtitle">Benefits of Taking Quizzes 🏅</h2>
      <p className="about-description">
        The best way to revise topics is by taking quizzes! 🎯💡
        <br />
        - **Active Recall**: Practice retrieval of information, which enhances
        memory retention.
        <br />
        - **Instant Feedback**: Know immediately which areas need improvement.
        <br />- **Regular Practice**: Repetition makes you ready to ace any
        exam. 🌟
      </p>

      <div className="footer">
        <p>QuizMaster © 2025. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;
