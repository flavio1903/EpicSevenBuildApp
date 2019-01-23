import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Home extends React.Component {
  render(){

    const {navigate} = this.props.navigation;
    
    return(
      <View style={styles.body}>
        <View style={styles.buttonsContainer}>
          <Text 
            style={styles.button}
            onPress={() => navigate('Builder')}
          >{"Builder"}</Text>

           <Text 
            style={styles.button}
            onPress={() => navigate('Catalyst')}
          >{"Catalizadores"}</Text>
        </View>
      </View>
    )
  }
};

export default Home;