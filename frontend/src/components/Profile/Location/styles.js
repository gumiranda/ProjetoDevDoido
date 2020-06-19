import {StyleSheet} from 'react-native';
import {appColors} from '../../../utils/appColors';
import gs from '../../../utils/appStyles';

export default StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    ...gs.rowCenter,
  },
  distance: {
    ...gs.smallText,
    color: appColors.darkHl,
    textTransform: 'uppercase',
  },
});
