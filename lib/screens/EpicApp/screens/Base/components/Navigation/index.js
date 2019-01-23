import React from 'react';
import { View , Text, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer, DrawerActions, SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../../screens/Home';
import Builder from '../../screens/Builder';
import Catalyst from '../../screens/Catalyst';

import styles from './styles';

const navigationOptions = ({navigation}) => {
    return {
        title: `Epic Seven`,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerLeft: <Icon name="bars" size={20} style={styles.headerLeft} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
    }
}

const CustomDrawerContentComponent = ({navigation}) => (
    <ScrollView>
        <SafeAreaView style={styles.drawerItem} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View>
                <TouchableOpacity 
                    style={styles.drawerButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text>{"Inicio"}</Text>   
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.drawerButton}
                    onPress={() => navigation.navigate('Builder')}
                >
                    <Text>{"Builder"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.drawerButton}
                    onPress={() => navigation.navigate('Catalyst')}
                >
                    <Text>{"Catalyst"}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </ScrollView>
);

const HomeNavigator = createStackNavigator({
    Home: Home,
    Builder: Builder,
    Catalyst: Catalyst
},{
    initialRouteName: 'Home',
    defaultNavigationOptions: navigationOptions
});

const AppNavigator = createDrawerNavigator({
    StackNavigator: HomeNavigator
},{
    contentComponent: CustomDrawerContentComponent,
    initialRouteName: 'StackNavigator'
});

export default createAppContainer(AppNavigator);