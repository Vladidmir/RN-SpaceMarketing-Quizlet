import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {Button} from '../ui';

import {s} from './quizlet.styles';

import {QuizComponentProps} from './Quizlet.props';

export const Quizlet: React.FC<QuizComponentProps> = ({
  currentQuestion,
  onAnswer,
  onNextQuestion,
}) => {
  const renderItem = ({item, index}: {item: string; index: number}) => (
    <TouchableOpacity
      style={{
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        height: 50,
        borderRadius: 20,
      }}
      onPress={() => onAnswer(item)}>
      <Text style={{color: 'white', fontSize: 18}}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={s.container}>
      <View style={{width: '100%'}}>
        <Text style={s.questionInfo}>
          Question {currentQuestion.index + 1} of{' '}
          {currentQuestion.totalQuestions}
        </Text>
        <Text style={s.questionText}>{currentQuestion.text}</Text>
      </View>

      <FlatList
        style={{width: '100%'}}
        data={currentQuestion.options}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      {currentQuestion.index + 1 < currentQuestion.totalQuestions && (
        <Button
          mode="transparent"
          title="Next Question"
          onPress={onNextQuestion}
          buttonStyle={{width: '100%'}}
        />
      )}
    </SafeAreaView>
  );
};
