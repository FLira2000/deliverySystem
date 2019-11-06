import React from 'react'
import {
    View,
    Text,
} from 'react-native'

export default class CadastroItemScreen extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Aqui ficará o cadastro de itens</Text>
            </View>
        );
    }
} 