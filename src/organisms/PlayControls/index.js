import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';

const PlayControls = ({isPaused, load, playAndPause, skip, iconSize}) => {
  return (
    <View style={style.playControlWrapper}>
      <>
        <TouchableOpacity onPress={() => load()} style={style.container}>
          <Icon
            name={'playlist-music'}
            size={iconSize}
            style={style.favoriteIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => playAndPause()}
          style={style.container}>
          <Icon
            name={isPaused ? 'pause' : 'play'}
            size={iconSize}
            style={style.favoriteIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => skip()} style={style.container}>
          <Icon name={'skip-next'} size={iconSize} style={style.favoriteIcon} />
        </TouchableOpacity>
      </>
    </View>
  );
};

PlayControls.propTypes = {
  isPaused: PropTypes.bool.isRequired,
  load: PropTypes.func.isRequired,
  playAndPause: PropTypes.func.isRequired,
  skip: PropTypes.func.isRequired,
};

export default PlayControls;
