import * as React from 'react';
import { Modal, View, Text, Alert } from 'react-native';
import styles from '../../styles';

type Props = {
    opened: boolean,
    closeFunction: function,
};

class Equipment extends React.Component<Props> {
    render(){
        const { opened, closeFunction } = this.props;

        return(
            <Modal
                animationType="slide"
                transparent={true}
                onRequestClose={closeFunction}
                visible={opened}
            >
                <View style={styles.modal}>
                    <Text>{"MODAL"}</Text>
                </View>
            </Modal>
        )
    }
}

export default Equipment;