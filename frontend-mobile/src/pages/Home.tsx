import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { commonCss, homeCss } from '../styles';
import homeImage from '../assets/images/home-image.png';
import { ButtonIcon } from '../components';
import { useNavigation } from '@react-navigation/native';
import { isAuthenticated } from '../utils/auth';

const Home = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const onPress = () => navigation.navigate('Login');

  const verifyAuthStatus = async () => {
    setIsLoading(true)
    let isAuth = await isAuthenticated();
    if (isAuth) {
      navigation.reset({ routes: [{ name: 'Movies' }], index: 0 });
    }
    else {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    verifyAuthStatus();
  }, []);

  return (
    <View style={commonCss.container}>
      {
        isLoading ? (
          <View style={{marginTop: 60}}>
            <ActivityIndicator color="#FFF" size="large" />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>Verificando dados...</Text>
          </View>)
          :
          (
            <>
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
            </>
          )
      }

    </View>
  );
}
export default Home;