import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Slot extends React.Component {
    render(){
        const { info } = this.props; 

        return(
            <View style={styles.slot}>
                <View style={styles.image}>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoText}>{"asd"}</Text>
                    <Text style={styles.infoText}>{"asd"}</Text>
                    <Text style={styles.infoText}>{"asd"}</Text>
                    <Text style={styles.infoText}>{"asd"}</Text>
                </View>
            </View>
        )
    }
}

export default Slot;