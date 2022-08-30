import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {setRating} from '../../redux/ratingSlice';
import style from './style';

const HeartRating = ({index, iconSize}) => {
  const dispatch = useDispatch();
  const {rating} = useSelector(state => state.rating);

  const handleUpdate = () => {
    dispatch(setRating(index));
  };

  return (
    <TouchableOpacity onPress={() => handleUpdate()} style={style.heartRating}>
      <Icon
        name={rating === index ? 'heart' : 'heart-outline'}
        size={iconSize}
      />
    </TouchableOpacity>
  );
};

HeartRating.propTypes = {
  index: PropTypes.number.isRequired,
  iconSize: PropTypes.number.isRequired,
};

export default HeartRating;
