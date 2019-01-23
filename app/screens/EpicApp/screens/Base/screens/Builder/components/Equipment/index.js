import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import Modal from "react-native-modal";
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
                onBackdropPress={closeFunction}
                isVisible={opened}
            >
                <View style={styles.modal}>
                    <Text>{"MODAL"}</Text>
                </View>
            </Modal>
        )
    }
}

export default Equipment;