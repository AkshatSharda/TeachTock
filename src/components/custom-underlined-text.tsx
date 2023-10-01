import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../common/colors';

interface CustomUnderlinedTextProps {
  text: string;
}

const CustomUnderlinedText: React.FC<CustomUnderlinedTextProps> = props => {
  const {text} = props;
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: -16,
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
  underline: {
    backgroundColor: colors.white,
    height: 4,
    width: '70%',
    marginTop: 4,
  },
});

export default CustomUnderlinedText;
