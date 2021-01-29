import React from 'react';
import { Image, Text, View } from 'react-native';
import { commonCss, homeCss } from '../styles';
import homeImage from '../assets/images/home-image.png';
import { ButtonIcon } from '../components';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const onPress = () => navigation.navigate('Login');

  return (
    <View style={commonCss.container}>
      <View style={homeCss.imageContainer}>
        <Image source={homeImage} />
      </View>
      <View style={homeCss.titleContainer}>
        <Text style={homeCss.titleText}>Avalie filmes</Text>
      </View>
      <View style={homeCss.subTitleContainer}>
        <Text style={homeCss.subTitleText}>Diga o que você achou do seu</Text>
        <Text style={homeCss.subTitleText}>filme favorito</Text>
      </View>
      <View style={homeCss.btnContainer}>
        <ButtonIcon label="fazer login" onPress={onPress} />
      </View>
    </View>
  );
}
export default Home;