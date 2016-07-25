import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './Reducers';
import Navigation from './Navigation';

import styles from './Containers/Styles/AppStyle';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export default () => {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
            <View style={styles.applicationView}>
                {/*<StatusBar barStyle='light-content' />*/}
                <Navigation />
            </View>
        </Provider>
    );
};
