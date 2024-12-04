import React from 'react';
import { useSelector } from 'react-redux';
import QuizCard from '../components/QuizCard';

const HomePage = () => {
  const quizzes = useSelector((state) => state.quiz.quizzes); 
  const user = useSelector((state) => state.user); 

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Available Quizzes</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {quizzes.map((quiz) => (
          <QuizCard 
            key={quiz.id} 
            quiz={quiz} 
            isTaken={user.takenQuizzes.includes(quiz.id)} 
            pointsEarned={user.quizPoints[quiz.id] || 0} 
            isLoggedIn={user.isLoggedIn}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
