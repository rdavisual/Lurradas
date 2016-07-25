/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import { Images } from '../Themes';

import styles from './Styles/MainStyles';

class Main extends Component {
    go() {
        this.props.navigator.push({
            title: 'Prueba1',
            name: 'Prueba1',
            passProps: {}
        });
    }
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.centered}>
                <Image source={Images.logo} style={styles.logo} />
              </View>
              <Text style={styles.welcome}>
                Welcome to React Native!
              </Text>
              <TouchableHighlight style={styles.botton} onPress={this.go.bind(this)} >
                  <Text style={styles.textButton}>Entrar</Text>
              </TouchableHighlight>
            </View>
        );
    }
}

export default Main;
