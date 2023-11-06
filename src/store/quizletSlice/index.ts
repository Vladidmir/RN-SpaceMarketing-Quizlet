import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {QuizState} from './quizletSlice.type';

const initialState: QuizState = {
  questions: [
    {
      text: 'Why did the scarecrow win an award?',
      options: [
        'Because it was outstanding.',
        'Because it could fly.',
        'Because it was funny.',
      ],
      correctOption: 'Because it was outstanding.',
    },
    {
      text: 'What did the grape say when it got stepped on?',
      options: [`Ouch!`, `I'm a raisin now!`, `Nothing, grapes can't talk.`],
      correctOption: `Nothing, grapes can't talk.`,
    },
    {
      text: 'Why was the math book sad?',
      options: [
        `It had too many problems.`,
        `It couldn't count.`,
        'It was a sad story.',
      ],
      correctOption: 'It had too many problems.',
    },
    {
      text: `Why don't skeletons fight each other?`,
      options: [
        'Because they have no guts.',
        `Because they're too fragile.`,
        `Because they're already dead.`,
      ],
      correctOption: 'Because they have no guts.',
    },
  ],
  currentQuestionIndex: 0,
  score: 0,
  quizCompleted: false,
};

const quizletSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    answerQuestion(
      state,
      action: PayloadAction<{selectedOption: string; correctOption: string}>,
    ) {
      const {selectedOption, correctOption} = action.payload;
      if (selectedOption === correctOption) {
        state.score += 1;
      }
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizCompleted = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },
    resetQuiz(state) {
      state.score = 0;
      state.currentQuestionIndex = 0;
      state.quizCompleted = false;
    },
  },
});

export const {answerQuestion, resetQuiz} = quizletSlice.actions;

export default quizletSlice.reducer;
