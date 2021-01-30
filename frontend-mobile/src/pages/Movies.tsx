import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, Text, View } from 'react-native';
import { MovieCard } from '../components';
import { colors, commonCss } from '../styles';
import { makePrivateRequest } from '../utils/requests';
import { Movie } from '../utils/types';

const Movies = () => {

  const [moviesList, setMoviesList] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [genreId, setGenreId] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const renderFooter = () => {
    if(activePage > totalPages) {
      return null;
    }
    return (<ActivityIndicator style={{ marginTop: 50 }} color="#FFF" size="large" />);
  }

  const getMoviesList = async (isGenreChange: boolean) => {
    try {
      setIsLoading(true);

      const params = {
        page: isGenreChange ? 0 : activePage,
        linesPerPage: 10,
        genreId
      }

      const res = await makePrivateRequest({ url: '/movies', params });
      if(isGenreChange) {
        setMoviesList(res.data.content);
      }
      else {
        setMoviesList([...moviesList, ...res.data.content]);
      }
      if (activePage === 0) {
        setTotalPages(res.data.totalPages);
      }
      setActivePage(isGenreChange ? 1 : activePage + 1);
    }
    catch (error) {
      console.warn(error);
    }
    finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if(activePage !== 0) {
      getMoviesList(true);
    }
    else {
      getMoviesList(false);
    }
  }, [genreId]);

  return (
    <View style={commonCss.container}>
      <View style={{height: 82, marginTop: 17, backgroundColor: colors.mediumGray, width: '100%'}}>
        <Text>Genre area</Text>
      </View>

      {
        isLoading && activePage === 0 ?
          (<ActivityIndicator style={{ marginTop: 50 }} color="#FFF" size="large" />)
          :
          (
            <FlatList
              data={moviesList}
              renderItem={({ item }) =>
              (<MovieCard
                key={item.id}
                movie={item}
              />)
              }
              onEndReached={() => { (activePage <= totalPages) && getMoviesList(false) }}
              onEndReachedThreshold={0.1}
              keyExtractor={(item) => item.id.toString()}
              ListFooterComponent={renderFooter}
            />
          )
      }


    </View>
  );
}
export default Movies;