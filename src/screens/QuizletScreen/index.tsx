import React from 'react';
import {SafeAreaView} from 'react-native';

import {Quizlet} from '../../components/Quizlet';
import {QuizletSummary} from '../../components/Quizlet/QuizSummary';

//redux
import {answerQuestion, resetQuiz} from '../../store/quizletSlice';
import {useAppSelector, useAppDispatch} from '../../store';

import {s} from './quizlet.styles';

export const QuizletScreen = () => {
  const {questions, currentQuestionIndex, score, quizCompleted} =
    useAppSelector(state => state.quizlet);

  const correctOption = questions[currentQuestionIndex]?.correctOption;

  const dispatch = useAppDispatch();

  const answerQuestionHandler = (selectedOption: string) => {
    dispatch(answerQuestion({selectedOption, correctOption}));
  };

  const resetQuizHandler = () => {
    dispatch(resetQuiz());
  };

  const nextQuestionHandler = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      dispatch(
        answerQuestion({selectedOption: '', correctOption: correctOption}),
      );
    }
  };

  return (
    <SafeAreaView style={s.root}>
      {quizCompleted ? (
        <QuizletSummary
          score={score}
          totalQuestions={questions.length}
          onRetry={resetQuizHandler}
        />
      ) : (
        <Quizlet
          currentQuestion={{
            index: currentQuestionIndex,
            totalQuestions: questions.length,
            text: questions[currentQuestionIndex].text,
            options: questions[currentQuestionIndex].options,
          }}
          onAnswer={answerQuestionHandler}
          onNextQuestion={nextQuestionHandler}
        />
      )}
    </SafeAreaView>
  );
};
