import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    quizzes: [
        {id: 1, name: 'Math Quiz', taken:false, points:0},
        {id: 2, name: 'Science Quiz', taken:false, points:0},
        {id: 3, name: 'History Quiz', taken:false, points:0},
        {id: 4, name: 'Geography Quiz', taken:false, points:0},
        {id: 5, name: 'Programming Quiz', taken:false, points:0},
    ],
};

const quizSlice =createSlice({
    name: 'quiz',
    initialState, 
    reducers: {
        markQuizTaken: (state,action) =>{
            const quiz = state.quizzes.find((q) => q.id ===action.payload.id);
            if (quiz){
                quiz.taken = true;
                quiz.points = action.payload.points;
            }
        },
    },
});

export const { markQuizTaken } = quizSlice.actions; 
export default quizSlice.reducer; 