import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const SubRightsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Sub Rights Screen!</Text>
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