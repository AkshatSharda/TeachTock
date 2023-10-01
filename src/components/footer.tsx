import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import icons from '../common/icons';
import colors from '../common/colors';

interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={icons.playlist} style={styles.icon} />
        <Text numberOfLines={1} style={styles.text}>
          Playlist • {title}
        </Text>
      </View>
      <Image source={icons.rightArrow} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: colors.blackShade1,
    marginTop: 16,
    justifyContent: 'space-between',
  },
  subContainer: {
    flexDirection: 'row',
    flexShrink: 1,
    marginRight: 16,
  },
  icon: {
    height: 16,
    width: 16,
  },
  text: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 8,
  },
});

export default Footer;
