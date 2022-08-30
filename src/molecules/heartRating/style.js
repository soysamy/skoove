import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  heartRating: {
    position: 'absolute',
    alignSelf: 'center',
    right: 10,
    zIndex: 6,
  },
});
