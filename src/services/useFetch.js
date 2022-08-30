import React from 'react';
//import file from '../data/manifest.json';

function useFetch(url) {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  let headers = new Headers();

  // Headers Section
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  React.useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch(url, {
        Headers: headers,
      });
      // convert the data to json
      const json = await data.json();

      // set state with the result
      setResponse(json);
    };

    // call the function
    fetchData().then(() => {
      setLoading(false);
    });
  }, [url]);
  return [response, loading, error];
}

export default useFetch;
