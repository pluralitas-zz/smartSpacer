import React from 'react'
import {View, Text, Dimensions} from 'react-native'

const ContainerMain =() => {
    return (
        <View>
            <Text> Air Quality </Text>
        </View>
    );

};

const deviceWidth = Math.round (Dimensions.get('window').width);
const styles = StyleSheet.create({
    ContainerMain:{
        width:deviceWidth-25,
        backgroundColor:'#29bfe',
        height: 100,
        borderRadius: 20,

        shadowColor:'#000000',
        shadowOffset:{
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9

    },
});

export default ContainerMain;