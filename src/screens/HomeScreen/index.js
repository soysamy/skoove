import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {COLORS} from '../../theme/colors';
import style from './style';
import SongCard from '../../organisms/songCard';
import {useNavigation} from '@react-navigation/native';
import TrackPlayer from 'react-native-track-player';

const url =
  'https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallenge/master/shared/simple%20audio%20player/data/manifest.json';

const HomeScreen = () => {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [isFetching, setIsFetching] = React.useState(false);
  const navigation = useNavigation();

  const getData = async () => {
    try {
      setLoading(true);
      setIsFetching(true);
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  const goPlayMusicScreen = (item, index) => {
    navigation.navigate('PlayerPage', {
      item,
      index,
    });
  };

  const initPlayer = async () => {
    await TrackPlayer.setupPlayer({});
  };

  React.useEffect(() => {
    initPlayer();
  }, []);

  if (loading) {
    return (
      <View style={style.activityWrapper}>
        <ActivityIndicator animating={true} color={COLORS.primary} size={90} />
      </View>
    );
  }

  return (
    <View style={style.container}>
      <Text style={style.header}>Skoovin</Text>
      <FlatList
        data={data.data}
        onRefresh={getData}
        refreshing={isFetching}
        renderItem={({item, index}) => {
          return (
            <SongCard
              index={index}
              title={item.title}
              cover={item.cover}
              isFavorite={true}
              onPress={() => goPlayMusicScreen(item, index)}
            />
          );
        }}
      />
    </View>
  );
};
export default HomeScreen;
