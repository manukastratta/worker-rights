import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, Touchable, TouchableOpacity, Platform} from 'react-native';
import { RIGHTSCATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

var globalProps = null

const renderGridItem = (itemData) => {
    return (
    <TouchableOpacity style={styles.gridItem} onPress={() => {
        globalProps.navigation.navigate({routeName: 'SubRights', params: {
            categoryId: itemData.item.id // sending the rights category to the new screen
        }});
    }}>
        <View>
            <Text>{itemData.item.title}</Text>
        </View>
    </TouchableOpacity>
    )
};

const RightsScreen = props => {
    globalProps = props
    return(
        <FlatList data={RIGHTSCATEGORIES} renderItem={renderGridItem} numColumns={2} />
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1, // take up as much space as possible
        margin: 15,
        height: 150
    }
})

export default RightsScreen;