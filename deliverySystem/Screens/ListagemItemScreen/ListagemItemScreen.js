import React from 'react';
import {
    ScrollView,
    View,
    ImageBackground,
    StyleSheet,
    Text
} from 'react-native';
import {
    Container,
    Card,
    CardItem,
    Body,
} from 'native-base';


export default class SettingsScreen extends React.Component {
    render() {
        return (
            <Container style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../../assets/background.jpg')}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <View style={styles.rect}>
                        <View style={{ marginTop: 10, marginLeft: 10, marginBottom: 20 }}> 
                            <Text style={{ fontSize: 17, fontWeight: '700' }}> 
                                Listagem de Entregas 
                            </Text>
                        </View>
                        <ScrollView style={{ marginLeft: 10, marginRight: 10 }}>
                            <Card>
                                <CardItem header bordered>
                                    <Text>Nome do Cliente</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                        <Text>
                                            Origem: alguma coisa
                                        </Text>
                                        <Text style={{ marginTop: 10 }}>
                                            Destino: alguma outra coisa
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer bordered>
                                    <Text>Data limite qualquer</Text>
                                </CardItem>
                            </Card>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </Container>
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
    }
});
