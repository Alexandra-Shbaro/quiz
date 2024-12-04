import React from 'react';
import QuizCard from './QuizCard';


const QuizList = ({ quizzes, onQuizClick }) => (
  <div className="quiz-list">
    {quizzes.map((quiz) => (
      <QuizCard key={quiz.id} quiz={quiz} onClick={() => onQuizClick(quiz)} />
    ))}
  </div>
);

export default QuizList;
