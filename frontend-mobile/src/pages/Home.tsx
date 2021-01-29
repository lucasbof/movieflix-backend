import React from 'react';
import { Image, Text, View } from 'react-native';
import { commonCss, homeCss } from '../styles';
import homeImage from '../assets/images/home-image.png';
import { ButtonIcon } from '../components';

const Home = () => {

  return (
    <View style={commonCss.container}>
      <Image source={homeImage} />
      <View style={homeCss.titleContainer}>
        <Text style={homeCss.titleText}>Avalie filmes</Text>
      </View>
      <View style={homeCss.subTitleContainer}>
        <Text style={homeCss.subTitleText}>Diga o que você achou do seu</Text>
        <Text style={homeCss.subTitleText}>filme favorito</Text>
      </View>
      <View style={homeCss.btnContainer}>
        <ButtonIcon label="fazer login" routeToGo="Login" />
      </View>
    </View>
  );
}
export default Home;