import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
  ImageStyle,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface IconWithTextProps {
  icon: ImageSourcePropType; // Type for the icon source
  text: string;
  iconStyle?: ImageStyle; // Type for icon styles
  containerStyle?: ViewStyle; // Type for container styles
  textStyle?: TextStyle; // Type for text styles
}

const IconWithText: React.FC<IconWithTextProps> = props => {
  const {icon, text, iconStyle, containerStyle, textStyle} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <Image source={icon} style={[styles.icon, iconStyle]} />
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 12,
  },
  icon: {
    height: 32,
    width: 32,
  },
  text: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default IconWithText;
