export const fetchSongs = async email => {
  // we fetch the manifest to load retuen the song list
  let endpoint =
    'https://github.com/Learnfield-GmbH/CodingChallenge/blob/master/shared/simple%20audio%20player/data/manifest.json';
  let headers = new Headers();

  // Headers Section
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: headers,
  });
  return response;
};
