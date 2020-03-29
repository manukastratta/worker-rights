import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const SubRightsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Sub Rights Screen!</Text>
            <Button title="Go to Rights Details Rights" onPress={() => {
                props.navigation.navigate({routeName: 'RightsDetails' });
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SubRightsScreen;