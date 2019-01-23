import React from 'react';
import { View, Text } from 'react-native';

class Catalyst extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Catalizadores',
  })

  render(){
    return(
      <View>
          <Text>{"CATALYST"}</Text>
      </View>
    )
  }
};

export default Catalyst;