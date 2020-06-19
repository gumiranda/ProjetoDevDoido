import {StyleSheet} from 'react-native';
import {appColors} from '../../../utils/appColors';
import gs from '../../../utils/appStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topButtons: {
    ...gs.rowBetween,
    position: 'absolute',
    top: 14,
    left: 12,
    right: 32,
  },
  topButtonRight: {
    marginLeft: 12,
    color: appColors.white,
  },
});
