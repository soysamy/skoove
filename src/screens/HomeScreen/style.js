import {COLORS} from '../../theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    paddingTop: 30,
  },
  header: {
    fontSize: 20,
    marginBottom: 15,
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
});
