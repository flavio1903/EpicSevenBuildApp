import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class Starting extends React.Component {
  render(){
    return(
      <View style={styles.body}>
          <Text style={styles.title}>{"Cargando"}</Text>
      </View>
    )
  }
};

export default Starting;