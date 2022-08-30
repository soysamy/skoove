import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import {useNavigation} from '@react-navigation/native';
import TrackPlayer, {
  State,
  useTrackPlayerEvents,
  Event,
  useProgress,
} from 'react-native-track-player';
import HeartRating from '../../molecules/heartRating';
import StarsRating from '../../molecules/startRating/startRating';
import PlayControls from '../../organisms/PlayControls';
import {COLORS} from '../../theme/colors';
import style from './style';
import {secsToTime} from '../../utils/time';

const events = [
  Event.PlaybackState,
  Event.PlaybackError,
  Event.RemotePlay,
  Event.RemotePause,
];

const PlayerScreen = ({route}) => {
  const [isPlaying, setPlaying] = React.useState(false);
  const navigation = useNavigation();
  const progress = useProgress();
  const musicData = route.params.item;
  const index = route.params.index;

  React.useEffect(() => {
    settings();
  });

  useTrackPlayerEvents(events, currEvent => {
    if (currEvent.type === Event.PlaybackError) {
      console.warn('Playback error');
    }
    if (currEvent.type === Event.PlaybackError) {
      console.log(currEvent.type);
    }
    if (currEvent.type === Event.RemotePlay) {
      console.log(currEvent.type);
    }
    if (currEvent.type === Event.RemotePause) {
      console.log(currEvent.type);
    }
  });

  const settings = async () => {
    const track = {
      url: musicData.audio,
      title: musicData.title,
      artist: musicData.title,
      duration: musicData.totalDurationMs,
    };
    await TrackPlayer.add([track]);
  };

  const playOrPause = async () => {
    const state = await TrackPlayer.getState();
    if (state === State.Paused) {
      setPlaying(!isPlaying);
      TrackPlayer.play();
      return;
    }

    if (state === State.Playing) {
      setPlaying(!isPlaying);
      TrackPlayer.pause();
      return;
    }
    setPlaying(true);
    TrackPlayer.play();
  };

  const goToPLaylist = () => {
    navigation.goBack();
  };

  const onSeekTrack = newTimeStamp => {
    TrackPlayer.seekTo(newTimeStamp);
  };

  return (
    <View style={style.container}>
      <Text style={style.header}>{musicData.title}</Text>
      <TouchableOpacity onPress={() => playOrPause()}>
        <Image
          style={style.tinyLogo}
          source={{
            uri: musicData.cover,
          }}
        />
      </TouchableOpacity>
      <View style={style.hearWrapper}>
        <HeartRating index={index} iconSize={60} />
      </View>
      <Slider
        tapToSeek={true}
        minimumTrackTintColor={COLORS.text}
        onValueChange={time => {
          onSeekTrack(time);
        }}
        minimumValue={0}
        maximumValue={progress.duration}
        value={progress.position}
        style={style.sliderStyle}
      />
      <PlayControls
        isPaused={false}
        load={goToPLaylist}
        playAndPause={playOrPause}
        skip={playOrPause}
        iconSize={50}
      />
      <View style={style.timeWrapper}>
        <Text style={style.timeLabel}>{secsToTime(progress.position)}</Text>
        <Text style={style.timeLabel}>/</Text>
        <Text style={style.timeLabel}>
          {secsToTime(progress.duration - progress.position)}
        </Text>
      </View>
      <View style={style.starWrapper}>
        <StarsRating
          iconName={'star'}
          iconSize={60}
          iconColor={COLORS.surface}
        />
      </View>
    </View>
  );
};
export default PlayerScreen;
