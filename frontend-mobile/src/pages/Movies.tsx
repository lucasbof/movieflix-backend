import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { MovieCard } from '../components';
import { commonCss, moviesListCss } from '../styles';
import { makePrivateRequest } from '../utils/requests';
import { Genre, Movie } from '../utils/types';
import downArrow from '../assets/images/down-arrow.png';
import { toastError } from '../utils/customToast';

const Movies = () => {

  const [moviesList, setMoviesList] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [genreId, setGenreId] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isShowGenreModal, setIsShowGenreModal] = useState(false);
  const [isGenresLoading, setIsGenresLoading] = useState(false);

  const renderFooter = () => {
    if (!isLoading) {
      return (<View></View>);
    }
    return (<ActivityIndicator style={{ marginTop: 50 }} color="#FFF" size="large" />);
  }

  const handleOnPressGenre = (id: number) => {
    setGenreId(id);
    setIsShowGenreModal(!isShowGenreModal);
  }

  const getMoviesList = async (isGenreChange: boolean) => {
    try {
      setIsLoading(true);

      const params = {
        page: isGenreChange ? 0 : activePage,
        linesPerPage: 10,
        genreId
      }

      if(isGenreChange) {
        setActivePage(0);
      }

      const res = await makePrivateRequest({ url: '/movies', params });
      if (isGenreChange) {
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
      toastError('Erro ao buscar a lista de filmes!');
    }
    finally {
      setIsLoading(false);
    }
  }

  const getGenresList = async () => {
    try {
      setIsGenresLoading(true);
      const res = await makePrivateRequest({ url: '/genres' });
      setGenres([...res.data, { id: 0, name: 'Todos os gêneros' }]);
    }
    catch (error) {
      toastError('Erro ao buscar a lista de gêneros!');
    }
    finally {
      setIsGenresLoading(false);
    }
  }

  useEffect(() => {
    if (activePage !== 0) {
      getMoviesList(true);
    }
    else {
      getMoviesList(false);
    }
  }, [genreId]);

  useEffect(() => {
    getGenresList();
  }, []);

  return (
    <View style={commonCss.container}>
      <Modal
        visible={isShowGenreModal}
        animationType="fade"
        transparent={true}
        presentationStyle="overFullScreen"
      >
        <View style={moviesListCss.modalContainer}>
          <ScrollView contentContainerStyle={moviesListCss.modalContent}>
            {
              isGenresLoading ? (<ActivityIndicator color="gray" size="large" />)
                :
                (genres.map(genre => (
                  <TouchableOpacity
                    key={genre.id}
                    style={moviesListCss.modalItem}
                    onPress={() => handleOnPressGenre(genre.id)}
                  >
                    <Text>{genre.name}</Text>
                  </TouchableOpacity>
                )))
            }
          </ScrollView>
        </View>
      </Modal>
      <View style={moviesListCss.genreContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setIsShowGenreModal(!isShowGenreModal)}
          style={moviesListCss.selectInput}
        >
          {
            isGenresLoading ? (<ActivityIndicator color="gray" size="small" />)
              :
              (<Text
                style={moviesListCss.selectText}
              >
                {genreId === 0 ? 'Todos os gêneros' : genres.filter(g => g.id === genreId)[0].name}
              </Text>)
          }

          <Image source={downArrow} style={{ height: 9, width: 15 }} />
        </TouchableOpacity>
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
              onEndReached={() => { if(activePage <= totalPages) getMoviesList(false) }}
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