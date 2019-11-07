import React from 'react';
import {
    ScrollView,
    View,
    ImageBackground,
    StyleSheet,
    Text
} from 'react-native';
import {
    Container
} from 'native-base';

import { MyCard } from './components/MyCard'

const backgroundImage = require('../../assets/background.jpg');

export default class SettingsScreen extends React.Component {
    state = {
        someData: [
            {
                key: 1,
                nome: "Fábio",
                origem: "Rua Joaquim Moreira - Sepetiba",
                destino: "Estrada do Magarça - Magarça",
                data: '26/06/2018'
            },
            {
                key: 2,
                nome: "Adrielly",
                origem: "Rua Joaquim Moreira - Sepetiba",
                destino: "Rua Sargento Rosa - Diplomata",
                data: '12/05/2001'
            },
            {
                key: 3,
                nome: "Zenaide",
                origem: "Rua Joaquim Moreira - Sepetiba",
                destino: "Rua Dona Júlia - Sepetiba",
                data: '19/12/1954'
            },
            {
                key: 4,
                nome: "Gabriel S.",
                origem: "Rua Parazinho - Vila Nova",
                destino: "UEZO",
                data: '19/12/1954'
            }
        ]
    };
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={backgroundImage}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <View style={styles.rect}>
                        <View style={styles.headerTextContainer}>
                            <Text style={{ fontSize: 17, fontWeight: '700' }}>
                                Listagem de Entregas
                            </Text>
                        </View>
                        <ScrollView style={{ marginLeft: 10, marginRight: 10 }}>
                            {
                                this.state.someData.map(item => ( 
                                    <MyCard item={item} key={item.key} />
                                ))
                            }
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    image: {
        width: 405,
        height: 700,
        alignSelf: "center"
    },
    rect: {
        width: 350,
        height: 584,
        backgroundColor: "rgba(255,255,255,1)",
        opacity: 0.80,
        marginTop: 40,
        alignSelf: 'center',
    },
    headerTextContainer: {
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 20
    },


});
