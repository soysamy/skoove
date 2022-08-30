import {COLORS} from '../../theme/colors';
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width / 1.4,
    height: undefined,
    aspectRatio: 135 / 76,
    backgroundColor: COLORS.surface,
    justifyContent: 'flex-end',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  activityWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: width / 1.4,
    height: undefined,
    aspectRatio: 135 / 76,
    position: 'absolute',
    zIndex: 1,
  },
  footerWrapper: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    backgroundColor: COLORS.surface,
    position: 'absolute',
    zIndex: 12,
  },
  songTitleStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.text,
  },
  favoriteIcon: {
    position: 'absolute',
    right: 10,
  },
  heartRating: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
    right: 0,
    zIndex: 6,
  },
  starWrapper: {
    alignItems: 'flex-start',
    width: '100%',
    height: 'auto',
    top: 10,
    left: 10,
    position: 'absolute',
    zIndex: 2,
  },
});
