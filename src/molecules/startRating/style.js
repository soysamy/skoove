import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../theme/colors';

// const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    //width: width / 1.4,
    //height: undefined,
    //aspectRatio: 135 / 76,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //padding: 10,
    //position: 'absolute',
    //zIndex: 2,
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
