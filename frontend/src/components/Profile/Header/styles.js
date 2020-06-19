import {StyleSheet} from 'react-native';
import {appColors} from '../../../utils/appColors';
import gs from '../../../utils/appStyles';

export default StyleSheet.create({
  imageContainer: {
    ...gs.center,
    marginTop: 16,
  },
  check: {
    ...gs.center,
    backgroundColor: appColors.text,
    borderRadius: 100,
    width: 32,
    height: 32,
    shadowColor: appColors.darkBg,
    shadowOffset: {height: 3, width: 1},
    shadowOpacity: 0.3,
    position: 'absolute',
    zIndex: 1,
    right: -16,
    bottom: 16,
  },
  follow: {
    ...gs.button,
    ...gs.rowCenter,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginTop: 16,
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 2,
  },
  followText: {
    fontSize: 16,
    color: appColors.text,
    fontWeight: '600',
    marginLeft: 4,
  },
});
