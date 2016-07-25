import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight
} from 'react-native';

import Main from '../Components/Main';
import Prueba1 from '../Components/Prueba1';

const NavigatorBarRouterMapper = {
    LeftButton: (route, navigator, index) => {
        if (index === 0) {
            return null;
        }
        return (
            <TouchableHighlight onPress={() => navigator.pop() }>
                <Text style={{marginTop: 10, marginLeft: 20, color: '#007AFF'}}>Back</Text>
            </TouchableHighlight>
        );
    },
    RightButton: (route, navigator, index) =>  null ,
    Title:  (route, navigator, index) => {
        if (route.name === 'Main' || route.name === 'Dashboard') {
            return null;
        }
        return (
            <Text style={{marginTop:10, color: '#007AFF'}}>{route.name}</Text>
        );
    },

};

class Navigation extends Component {
    renderScene(route, navigator) {
        switch (route.name) {
            case 'Main':
                return ( <Main {...route.props} navigator={navigator} route={route} /> );
            case 'Prueba1':
                return ( <Prueba1 {...route.props} navigator={navigator} route={route} /> );
            default:
                return null;
        }
    }
    render() {
        return (
            <Navigator
                initialRoute={{name:'Main'}}
                renderScene={this.renderScene}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromLeft;
                }}
                navigationBar={
                    <Navigator.NavigationBar routeMapper={NavigatorBarRouterMapper} />
                }
            />
        );
    }
}

export default Navigation;
