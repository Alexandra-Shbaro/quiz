import React from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate for routing

const QuizCard = ({ quiz }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/quiz/${quiz.id}`);
  };

  return (
    <div className="quiz-card">
      <h3>{quiz.name}</h3>
      {quiz.taken ? (
        <p>Taken - Points: {quiz.points}</p>
      ) : (
        <button onClick={handleClick}>Take it now!</button>
      )}
    </div>
  );
};

export default QuizCard;
