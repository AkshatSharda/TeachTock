import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import Colors from '../common/colors';
import * as Animatable from 'react-native-animatable';
import icons from '../common/icons';

interface AnswerOptionProps {
  answer: string;
  isCorrect?: boolean;
  onAnswerSelection: (id: number) => void;
  id: number;
}

const AnswerOption: React.FC<AnswerOptionProps> = props => {
  const [isSelected, setIsSelected] = React.useState(false); // [false, function]
  const [isAnswerClicked, setIsAnswerClicked] = React.useState(false); // [false, function]
  const {answer, isCorrect, onAnswerSelection, id} = props;

  useEffect(() => {
    if (isCorrect || (isCorrect === false && isAnswerClicked)) {
      setIsSelected(true);
    }
  }, [isCorrect, isAnswerClicked]);

  const onPress = () => {
    setIsAnswerClicked(true);
    onAnswerSelection(id);
  };
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        {isSelected && (
          <Animatable.View
            animation="slideInRight"
            duration={300}
            style={[
              styles.animatedContainer,
              isCorrect ? null : styles.wrongAnswer,
            ]}>
            <Image
              style={[styles.thumbsUp, isCorrect ? null : styles.thumbsDown]}
              source={icons.thumbsUp}
            />
          </Animatable.View>
        )}
        <Text style={styles.answer}>{answer}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    backgroundColor: Colors.lightGray,
    borderRadius: 8,
    marginLeft: 16,
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
  answer: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    padding: 8,
    paddingRight: 48,
    borderColor: Colors.black,
  },
  animatedContainer: {
    backgroundColor: Colors.success,
    width: '100%',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  thumbsUp: {
    height: '100%',
    width: 40,
  },
  thumbsDown: {
    transform: [{rotate: '180deg'}],
  },
  wrongAnswer: {
    backgroundColor: Colors.failure,
  },
});

export default AnswerOption;
