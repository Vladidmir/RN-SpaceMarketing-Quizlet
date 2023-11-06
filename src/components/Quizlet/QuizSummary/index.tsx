import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import {Button} from '../../ui';

import {s} from './quizletSumm.styles';

import {QuizSummaryProps} from './QuizletSumm.props';

export const QuizletSummary: React.FC<QuizSummaryProps> = ({
  score,
  totalQuestions,
  onRetry,
}) => (
  <SafeAreaView style={s.container}>
    <Text style={s.title}>Quiz Completed!</Text>
    <Text style={s.scoreText}>
      Your Score: {score} out of {totalQuestions}
    </Text>
    <Button
      mode="transparent"
      onPress={onRetry}
      title="Retry Quiz"
      buttonStyle={{borderColor: 'green', width: 200}}
      textStyle={{color: 'green'}}
    />
  </SafeAreaView>
);
