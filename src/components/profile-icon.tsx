import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
  ViewStyle,
} from 'react-native';
import colors from '../common/colors';

interface ProfileIconProps {
  icon: ImageSourcePropType;
  iconStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const ProfileIcon: React.FC<ProfileIconProps> = props => {
  const {icon, iconStyle, containerStyle} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <Image source={icon} style={[styles.icon, iconStyle]} />
      <View style={styles.plusButtonContainer}>
        <Text style={styles.text}>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  icon: {
    height: 44,
    width: 44,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 22,
  },
  plusButtonContainer: {
    position: 'absolute',
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: colors.green,
    bottom: -10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileIcon;
