import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { RIGHTSCATEGORIES } from '../data/dummy-data'; 

const SubRightsScreen = props => {
    // Get the rights category that we passed in with navigation (eg. "Getting Paid")
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = RIGHTSCATEGORIES.find(cat => cat.id == catId);

    return(
        <View style={styles.screen}>
            <Text>The Sub Rights Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Rights Details Rights" onPress={() => {
                props.navigation.navigate({routeName: 'RightsDetails' });
            }} />
        </View>
    );
};

// the category id / name will change, so we need to make this dynamic
SubRightsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = RIGHTSCATEGORIES.find(cat => cat.id == catId);

    return {
        headerTitle: selectedCategory.title
    };

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SubRightsScreen;