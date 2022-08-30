import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';

const StarsRating = ({iconSize, iconColor}) => {
  const [rating, setRating] = React.useState(0);
  return (
    <View style={style.container}>
      {[...Array(5)].map((data, index) => {
        return (
          <TouchableOpacity onPress={() => setRating(index)}>
            <Icon
              key={index}
              name={index <= rating ? 'star' : 'star-outline'}
              size={iconSize}
              color={iconColor}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

StarsRating.propTypes = {
  iconSize: PropTypes.number.isRequired,
  iconColor: PropTypes.string.isRequired,
};

export default StarsRating;
