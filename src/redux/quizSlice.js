import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizzes: [
    {
      id: 1,
      name: 'Math Quiz',
      taken: false,
      points: 0,
      questions: [
        {
          text: 'What is 2 + 2?',
          options: [
            { text: '3', isCorrect: false },
            { text: '4', isCorrect: true },
            { text: '5', isCorrect: false },
            { text: '6', isCorrect: false },
          ],
        },
        {
          text: 'What is 10 / 2?',
          options: [
            { text: '3', isCorrect: false },
            { text: '4', isCorrect: false },
            { text: '5', isCorrect: true },
            { text: '6', isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Science Quiz',
      taken: false,
      points: 0,
      questions: [
        {
          text: 'What planet is known as the Blue Planet?',
          options: [
            { text: 'Mars', isCorrect: false },
            { text: 'Earth', isCorrect: true },
            { text: 'Jupiter', isCorrect: false },
            { text: 'Venus', isCorrect: false },
          ],
        },
        {
          text: 'What is the chemical symbol for water?',
          options: [
            { text: 'O2', isCorrect: false },
            { text: 'CO2', isCorrect: false },
            { text: 'H2O', isCorrect: true },
            { text: 'H2', isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'History Quiz',
      taken: false,
      points: 0,
      questions: [
        {
          text: 'Who discovered America?',
          options: [
            { text: 'Christopher Columbus', isCorrect: true },
            { text: 'Vasco da Gama', isCorrect: false },
            { text: 'Marco Polo', isCorrect: false },
            { text: 'Ferdinand Magellan', isCorrect: false },
          ],
        },
        {
          text: 'In which year did World War II end?',
          options: [
            { text: '1942', isCorrect: false },
            { text: '1945', isCorrect: true },
            { text: '1950', isCorrect: false },
            { text: '1939', isCorrect: false },
          ],
        },
      ],
    },
    {
        id: 4,
        name: 'Geography Quiz',
        taken: false,
        points: 0,
        questions: [
          {
            text: 'Which of the following rivers is the longest in the world?',
            options: [
              { text: 'Nile', isCorrect: true },
              { text: 'Amazon', isCorrect: false },
              { text: 'Yangtze', isCorrect: false },
              { text: 'Mississippi', isCorrect: false },
            ],
          },
          {
            text: 'Which country has the most time zones?',
            options: [
              { text: 'United States', isCorrect: false },
              { text: 'France', isCorrect: true },
              { text: 'China', isCorrect: false },
              { text: 'Australia', isCorrect: false },
            ],
          },
        ],
      },
      {
        id: 5,
        name: 'Programming Quiz',
        taken: false,
        points: 0,
        questions: [
          {
            text: 'Which of the following data types is immutable in Python?',
            options: [
              { text: 'List', isCorrect: false},
              { text: 'Set', isCorrect: false },
              { text: 'Tuple', isCorrect: true },
              { text: 'Dictionary', isCorrect: false },
            ],
          },
          {
            text: 'Which of the following is the correct way to define a function in JavaScript?',
            options: [
              { text: 'function myFunction[] {}', isCorrect: false },
              { text: 'def myFunction() {}', isCorrect: false },
              { text: 'myFunction() => {}', isCorrect: false },
              { text: 'function myFunction() {}', isCorrect: true },
            ],
          },
        ],
      },
  ],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    markQuizTaken: (state, action) => {
      const quiz = state.quizzes.find((q) => q.id === action.payload.id);
      if (quiz) {
        quiz.taken = true;
        quiz.points = action.payload.points;
      }
    },
  },
});

export const { markQuizTaken } = quizSlice.actions;
export default quizSlice.reducer;
