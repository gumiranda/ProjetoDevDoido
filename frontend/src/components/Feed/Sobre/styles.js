import {StyleSheet} from 'react-native';
import {appColors} from '../../../utils/appColors';
import gs from '../../../utils/appStyles';

export default StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    backgroundColor: appColors.darkBg,
  },
  info: {
    color: appColors.textSec,
    fontWeight: '600',
    marginTop: 4,
  },
  about: {
    fontSize: 13,
    fontWeight: '600',
    color: appColors.textSec,
    marginTop: 6,
    lineHeight: 20,
  },
});
