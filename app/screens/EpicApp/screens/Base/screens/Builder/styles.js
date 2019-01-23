import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    body: {
      backgroundColor: 'grey',
      height: '100%',
      width: '100%'
    },
    title: {
        color: 'white'
    },
    picker: {
        backgroundColor: '#EEE',
        height: 50,
        width: '100%'
    },
    item: {
        color: 'black'
    },
    mainContent: {
        padding: 20,
        width: '100%'
    },
    slotsMainContent:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    slotContainer: {
        height: 50,
        width: '45%'
    },
    slotTopLeft: {
        marginRight: '10%',
        marginBottom: 20,
    },
    slotTopRight: {
    },
    slotMidLeft: {
        marginRight: '10%',
        marginBottom: 20,
    },
    slotMidRight: {
    },
    slotBottomLeft: {
        marginRight: '10%',
        marginBottom: 20,
    },
    slotBottomRight: {
    },

    statsMainContent: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    leftBox: {
        marginRight: '10%',
        width: '45%'
    },
    rightBox: {
        width: '45%'
    }
});