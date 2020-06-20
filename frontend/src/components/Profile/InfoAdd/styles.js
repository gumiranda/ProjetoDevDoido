import {StyleSheet} from 'react-native';
import {appColors} from '../../../utils/appColors';
import gs from '../../../utils/appStyles';

export default StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    ...gs.rowBetween,
    marginHorizontal: 16,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginTop: -19,
  },
  statContainer: {
    ...gs.center,
    flex: 1,
  },
  statContainerDivider: {
    ...gs.center,
    flex: 1,
    borderLeftWidth: 1,
    borderColor: appColors.secondClaro,
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
    color: appColors.white,
    marginTop: 6,
  },
  divider: {
    borderLeftWidth: 1,
    marginHorizontal: 0,
    borderColor: appColors.secondClaro,
  },
});
