import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { completeQuiz } from '../redux/quizSlice';
import { addPoints } from '../redux/userSlice'; 

const QuizDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const quiz = useSelector((state) =>
    state.quiz.quizzes.find((quiz) => quiz.id === parseInt(id))
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      dispatch(completeQuiz({ quizId: quiz.id, score }));
      dispatch(addPoints(score)); 
      alert(`Quiz completed! You scored ${score} points.`);
      navigate('/');
    }
  };

  if (!quiz) {
    return <p>Quiz not found</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{quiz.name}</h1>
      <div>
        <p>{quiz.questions[currentQuestion].text}</p>
        <div>
          {quiz.questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.isCorrect)}
              style={{ margin: '10px', padding: '10px' }}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizDetailPage;
