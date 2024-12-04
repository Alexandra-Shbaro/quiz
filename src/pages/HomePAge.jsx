import React from 'react';
import { useSelector } from 'react-redux';
import QuizCard from '../components/QuizCard';

const HomePage = () => {
  const quizzes = useSelector((state) => state.quiz.quizzes);
  const user = useSelector((state) => state.user);

  const takenQuizzes = user?.takenQuizzes || [];
  const quizPoints = user?.quizPoints || {};
  const isLoggedIn = user?.isLoggedIn || false;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Available Quizzes</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            quiz={quiz}
            isTaken={takenQuizzes.includes(quiz.id)}
            pointsEarned={quizPoints[quiz.id] || 0}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
