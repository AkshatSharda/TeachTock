import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../common/colors';
import AnswerOption from './answer-option';
import {McqDataOptionType} from '../modules/home/interfaces';

interface MultipleAnswerOptionsProps {
  options: McqDataOptionType[];
  onAnswerSelection: (id: number) => void;
  correctOptionId?: string;
  id: number;
}

const MultipleAnswerOptions: React.FC<MultipleAnswerOptionsProps> = props => {
  const {options, onAnswerSelection, correctOptionId, id} = props;
  return (
    <View>
      {options.map((option, index) => {
        return (
          <View key={index} style={styles.optionContainer}>
            <AnswerOption
              onAnswerSelection={onAnswerSelection}
              id={id}
              answer={option.answer}
              isCorrect={
                correctOptionId ? option.id === correctOptionId : undefined
              }
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: Colors.lightGray,
    borderRadius: 4,
    marginLeft: 16,
    alignItems: 'center',
    overflow: 'hidden',
  },
  optionContainer: {
    marginBottom: 8,
  },
});

export default MultipleAnswerOptions;
