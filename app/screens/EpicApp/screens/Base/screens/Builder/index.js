import React from 'react';
import { View, Text, TouchableOpacity, Picker } from 'react-native';

import Slot from './components/Slot';
import Equipment from './components/Equipment';
import styles from './styles';

class Builder extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Builder',
    });

    state = {
        language: 'Seleccionar Heroe',
        equipmentOpened: false
    }

    editEquipment = () => {
        this.setState({
            equipmentOpened: true
        })
    }

    closeEditEquipment = () => {
        this.setState({
            equipmentOpened: false
        })
    }

    componentWillUnmount = () => {
        this.closeEditEquipment();
    }

    render(){

        const { equipmentOpened } = this.state;
    
        return(
            <View>
                <Picker
                    selectedValue={this.state.language}
                    style={styles.picker}
                    itemStyle={styles.item}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="- Seleccionar Heroe - " value="0" />
                    <Picker.Item label="Aramintha" value="1" />
                    <Picker.Item label="Tenebria" value="2" />
                </Picker>

                <View style={styles.mainContent}>
                    <View style={styles.slotsMainContent}>
                        <TouchableOpacity 
                            style={[styles.slotContainer, styles.slotTopLeft]}
                            onPress={() => {this.editEquipment()}}
                        >
                            <Slot/>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.slotContainer, styles.slotTopRight]} onPress={() => {this.editEquipment()}}>
                            <Slot/>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.slotContainer, styles.slotMidLeft]} onPress={() => {this.editEquipment()}}>
                            <Slot/>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.slotContainer, styles.slotMidRight]} onPress={() => {this.editEquipment()}}>
                            <Slot/>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.slotContainer, styles.slotBottomLeft]} onPress={() => {this.editEquipment()}}>
                            <Slot/>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.slotContainer, styles.slotBottomRight]} onPress={() => {this.editEquipment()}}>
                            <Slot/>
                        </TouchableOpacity>
                    </View>

                    <Equipment
                        opened={equipmentOpened}
                        closeFunction={() => this.closeEditEquipment()}
                    />

                    <View style={styles.statsMainContent}>
                        <View style={styles.leftBox}>
                            <Text>{"Stats Iniciales"}</Text>
                            <Text>{"ATA: "}</Text>
                            <Text>{"DEF: "}</Text>
                            <Text>{"HEA: "}</Text>
                            <Text>{"SPE: "}</Text>
                        </View>

                        <View style={styles.rightBox}>
                            <Text>{"Stats Finales"}</Text>
                            <Text>{"ATA: "}</Text>
                            <Text>{"DEF: "}</Text>
                            <Text>{"HEA: "}</Text>
                            <Text>{"SPE: "}</Text>
                            <Text>{"CHC: "}</Text>
                            <Text>{"CHD: "}</Text>
                            <Text>{"EFF: "}</Text>
                            <Text>{"EFR: "}</Text>
                            <Text>{"DAC: "}</Text>
                        </View>
                    </View>
                </View>
                
            </View>
        )
    }
};

export default Builder;