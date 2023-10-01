import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import icons from '../common/icons';
import CustomUnderlinedText from './custom-underlined-text';
import Timer from './timer';
import {CommonStyles} from '../common/common-styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={[CommonStyles.flexRow, styles.timerContainer]}>
        <Image source={icons.timer} style={styles.icon} />
        <Timer />
      </View>
      <CustomUnderlinedText text={'For You'} />
      <Image source={icons.search} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: 24,
    width: 24,
  },
  timerContainer: {
    width: 50,
  },
});

export default Header;
