import React from 'react';
import {createAppContainer} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import CadastroItemScreen from './Screens/CadastroItemScreen/CadastroItemScreen';
import ListagemItemScreen from './Screens/ListagemItemScreen/ListagemItemScreen';

import store from './store';
import {Provider} from 'react-redux';

const TabNavigator = createBottomTabNavigator(
  {
    Cadastro: CadastroItemScreen,
    Listagem: ListagemItemScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: () => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Cadastro') {
          iconName = 'ios-add';
        } else if (routeName === 'Listagem') {
          iconName = 'ios-list';
        }

        return <IconComponent name={iconName} size={25} color={'grey'} />;
      },
    }),
  },
);

const AppContainer = createAppContainer(TabNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default class WrappedApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}
