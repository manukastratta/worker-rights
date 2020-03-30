import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, Touchable, TouchableOpacity, Platform} from 'react-native';
import { RIGHTSCATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import RightsCategoryTile from '../components/RightsCategoryTile';
import Modal from 'react-native-modal';

var globalProps = null

const renderGridItem = (itemData) => {
    return (
        <RightsCategoryTile title={itemData.item.title} onSelect={() => {
            globalProps.navigation.navigate({routeName: 'SubRights', params: {
                categoryId: itemData.item.id // sending the rights category to the new screen
            }});
        }} />
        )
};

const RightsScreen = props => {
    globalProps = props
    return(
        <View style={styles.screen}>
            <FlatList data={RIGHTSCATEGORIES} renderItem={renderGridItem} numColumns={2} />

            <Modal isVisible={false}>
                <View style={styles.modalStyle}>
                <Text>I am the modal content!</Text>
                </View>
            </Modal>

        </View>
    );
};

RightsScreen.navigationOptions = {
    headerTitle: 'Rights Information',
    headerStyle: {
        // only color the background of the header if Android to fit the typical platform look
        backgroundColor: Platform.OS === 'android' ? Colors.lightOrange : ''
    },
    headerTintColor: Colors.darkOrange,
    headerTitleStyle: {
        fontWeight: 'bold',
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        margin: 10
    },
    modalStyle: {
        backgroundColor: 'white',
        width: '80%',
        height: '65%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10%'
    }
})

export default RightsScreen;