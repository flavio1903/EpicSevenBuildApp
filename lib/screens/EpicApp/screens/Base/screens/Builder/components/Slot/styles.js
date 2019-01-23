import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    slot:{
        alignItems: 'flex-start',
        flexDirection: 'row',
        flex: 1,
    },
    image: {
        alignSelf: 'flex-start',
        backgroundColor: 'blue',
        height: '100%',
        width: '30%'
    },
    info: {
        alignSelf: 'flex-end',
        backgroundColor: 'black',
        padding: 6,
        height: '100%',
        width: '70%'
    },
    infoText: {
        color: 'white',
        fontSize: 12
    }
});