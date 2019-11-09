import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { MyCard } from './components/MyCard';

const backgroundImage = require('../../assets/background.jpg');

const ListagemItemScreen = ({list}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.rect}>
          <View style={styles.headerTextContainer}>
            <Text style={{fontSize: 17, fontWeight: '700'}}>
              Listagem de Entregas
            </Text>
          </View>
          <ScrollView style={{marginLeft: 10, marginRight: 10}}>
            {list.map(item => (
              <MyCard item={item} key={item.key} />
            ))}
          </ScrollView>
          <View style={{marginBottom: 10}} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 405,
    height: 700,
    alignSelf: 'center',
  },
  rect: {
    width: 350,
    height: 584,
    backgroundColor: 'rgba(255,255,255,1)',
    opacity: 0.8,
    marginTop: 40,
    alignSelf: 'center',
  },
  headerTextContainer: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
});

export default connect(state => ({list: state}))(ListagemItemScreen);
