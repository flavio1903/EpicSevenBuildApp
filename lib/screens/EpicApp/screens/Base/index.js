import React from 'react';
import { View, Text } from 'react-native';
import Navigation from './components/Navigation';
import styles from './styles';

class Base extends React.Component {
    render(){
        return(
            <View style={styles.body}>
                <Navigation/>
            </View>
        )
    }
};

export default Base;