import {StyleSheet} from 'react-native';
import {appColors} from './appColors';

export default StyleSheet.create({
  sectionContainer: {
    paddingVertical: 24,
    paddingHorizontal: 32,
    marginBottom: 8,
    backgroundColor: appColors.fourth,
  },
  sectionContainerDark: {
    paddingVertical: 24,
    paddingHorizontal: 32,
    marginBottom: 8,
    backgroundColor: appColors.darkBg,
  },
  sectionTitle: {
    fontWeight: '700',
    color: appColors.white,
    fontSize: 15,
  },
  rowCenter: {
    flexDirection: 'row',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    borderBottomColor: appColors.secondClaro,
    borderBottomWidth: 1,
    marginVertical: 24,
  },
  title: {
    color: appColors.white,
    fontSize: 30,
  },
  subTitle: {
    fontWeight: '600',
    textTransform: 'uppercase',
    color: appColors.white60,
    fontSize: 15,
    letterSpacing: 1,
  },
  smallText: {
    fontSize: 12,
    fontWeight: '800',
    color: appColors.text,
  },
  absoluteFull: {
    position: 'absolute',
    top: 40,
    left: 95,
    width: '100%',
    height: '100%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.pink,
    borderRadius: 100,
  },
});
