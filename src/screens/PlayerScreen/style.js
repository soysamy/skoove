import {COLORS} from '../../theme/colors';
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.primary,
    paddingTop: 100,
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
  tinyLogo: {
    width: width / 1.1,
    height: undefined,
    aspectRatio: 135 / 76,
    marginTop: 30,
  },
  starWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    marginTop: 20,
  },
  sliderStyle: {
    width: '90%',
    paddingHorizontal: 10,
    marginTop: 30,
  },
  timeLabel: {
    fontSize: 18,
    color: COLORS.surface,
    marginHorizontal: 10,
  },
  timeWrapper: {
    flexDirection: 'row',
  },
  hearWrapper: {
    top: -60,
    alignSelf: 'flex-end',
    right: 20,
  },
});
