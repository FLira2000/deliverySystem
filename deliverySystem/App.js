import {
    createAppContainer,
} from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import CadastroItemScreen from './Screens/CadastroItemScreen/CadastroItemScreen'
import ListagemItemScreen from './Screens/ListagemItemScreen/ListagemItemScreen'

const TabNavigator = createBottomTabNavigator({
    Cadastro: CadastroItemScreen,
    Listagem: ListagemItemScreen,
});

export default createAppContainer(TabNavigator);