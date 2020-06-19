import {StyleSheet} from 'react-native';
import {appColors} from '../../../utils/appColors';
import gs from '../../../utils/appStyles';

export default StyleSheet.create({
  bookmark: {
    position: 'absolute',
    width: 56,
    height: 56,
    right: 32,
    top: -56 / 2,
    backgroundColor: appColors.text,
    ...gs.center,
    borderRadius: 56 / 2,
    zIndex: 10,
  },
});
