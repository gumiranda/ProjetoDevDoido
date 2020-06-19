import {StyleSheet} from 'react-native';
import {appColors} from '../../../utils/appColors';
import gs from '../../../utils/appStyles';

export default StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    ...gs.rowBetween,
    marginHorizontal: 16,
    borderRadius: 16,
    marginTop: -18,
  },
  statContainer: {
    ...gs.center,
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: appColors.text,
  },
  stat: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: appColors.lightHl,
    marginTop: 6,
  },
  divider: {
    borderLeftWidth: 1,
    borderColor: appColors.darkHl,
  },
});
