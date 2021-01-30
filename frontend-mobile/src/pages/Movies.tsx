import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { MovieCard } from '../components';
import { commonCss } from '../styles';
import { Movie } from '../utils/types';

const Movies = () => {

  const [movie, setMovie] = useState<Movie>({
    id: 10,
    title: 'Capitã Marvel',
    subTitle: 'Mais alto. Mais longe. Mais rápido.',
    year: 2019,
    imgUrl: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/nBS1vONGYrsL2C68C2oDQ3eKJR1.jpg',
    synopsis: 'Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. Ao tentar impedir uma invasão de larga escala na Terra, em 1995, ela tem memórias recorrentes de uma outra vida, como Carol Danvers, agente da Força Aérea norte-americana. Com a ajuda de Nick Fury, Capitã Marvel precisa descobrir os segredos de seu passado e pôr um fim ao conflito intergalático com os Skrulls.,',
    genreId: 1,
    reviews: []
  })

  return (
    <View style={commonCss.container}>
      <Text>Genre area</Text>
      <MovieCard movie={movie} />
    </View>
  );
}
export default Movies;