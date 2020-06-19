import {StyleSheet} from 'react-native';
import {appColors} from '../../../utils/appColors';
import gs from '../../../utils/appStyles';

export default StyleSheet.create({
  container: {
    ...gs.rowCenter,
    ...gs.center,
    ...gs.sectionContainer,
  },
  weatherContainer: {
    ...gs.rowCenter,
    paddingRight: 12,
    marginRight: 12,
    borderRightColor: appColors.quatro,
    borderRightWidth: 1,
  },
  title: {
    color: appColors.text,
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: '800',
  },
  subTitle: {
    color: appColors.textSec,
    fontSize: 10,
    fontWeight: '800',
  },
  containerStars: {
    alignSelf: 'center',
  },
  circlesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    borderWidth: 2,
    borderColor: appColors.lightBg,
  },
});
