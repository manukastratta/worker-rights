import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const RightsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Rights Screen!</Text>
            <Button title="Go to Sub Rights" onPress={() => {
                props.navigation.navigate({routeName: 'SubRights' });
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

export default RightsScreen;