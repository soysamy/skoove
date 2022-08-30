import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {COLORS} from '../../theme/colors';
import style from './style';
import StarsRating from '../../molecules/startRating/startRating';
import HeartRating from '../../molecules/heartRating';

const SongCard = ({index, title, cover, isFavorite, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onPress()} style={style.container}>
        <>
          <View style={style.starWrapper}>
            <StarsRating iconSize={24} iconColor={COLORS.primary} />
          </View>
          <Image
            style={style.tinyLogo}
            source={{
              uri: cover,
            }}
          />
          <View style={style.footerWrapper}>
            <Text style={style.songTitleStyle}>
              {title !== undefined ? title : 'Song Title'}
            </Text>
            <>
              <HeartRating index={index} iconSize={24} />
            </>
          </View>
        </>
      </TouchableOpacity>
    </View>
  );
};

SongCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SongCard;
