import React from 'react';
import {View} from 'react-native';
import Base from './screens/Base';
import Starting from './screens/Starting';

class EpicApp extends React.Component {
    state = {
        timer: null,
        starting: true
    };

    startApp = () => {
        clearInterval(this.state.timer);

        this.setState({
            starting: false
        });
    }

    componentDidMount() {
        this.setState({
            timer: setInterval(this.startApp.bind(this), 1000)
        });
    }

    render(){
        var {starting} = this.state;

        return(
            <View>
                {starting ? <Starting/> : <Base/>} 
            </View>
        )
    }
};

export default EpicApp;