import React from 'react';
import {
    View,
    Text,
} from 'react-native';


export default class ListagemItemScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Aqui ficará a listagem dos itens</Text>
            </View>
        );
    }
}