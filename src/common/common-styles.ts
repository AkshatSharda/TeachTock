import {StyleSheet} from 'react-native';
import colors from './colors';

export const CommonStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  fullFlex: {
    flex: 1,
  },
  fullFlexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackBg: {
    backgroundColor: colors.black,
  },
  errorText: {
    color: colors.red,
    fontSize: 12,
  },
});
