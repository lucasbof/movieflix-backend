import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import backArrow from '../assets/images/back-arrow.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import { leftHeaderCss } from '../styles';

const LeftHeader = () => {
  const route = useRoute();
  const navegation = useNavigation();
  return (
    <View style={leftHeaderCss.container}>
      {
        (route.name === 'Login' || route.name === 'MovieDetails') ?
          (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navegation.goBack()}
            >
              <Image source={backArrow} />
            </TouchableOpacity>
          )
          :
          (<View style={leftHeaderCss.emptyView}></View>)
      }
      <View style={leftHeaderCss.titleTextContainer}>
        <Text style={leftHeaderCss.titleText}>MovieFlix</Text>
      </View>
    </View>
  );
}
export default LeftHeader;