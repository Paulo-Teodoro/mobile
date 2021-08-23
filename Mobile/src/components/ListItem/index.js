import React, { useEffect, useState } from 'react';
import {View, Text, Image, StatusBar, StyleSheet, FlatList} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({data}) {

    function LeftAction() {
        return (
            <View style = {styles.leftAction}>
                <Text style = {styles.textLeftAction}>
                    Notas
                </Text>
            </View>
        )
    }

    function RightAction() {
        return (
            <View style = {styles.rightAction}>
                <Text style = {styles.textRightAction}>
                    Faltas
                </Text>
            </View>
        )
    }

    return(
        <Swipeable
            renderLeftActions = {LeftAction}
            renderRightActions = {RightAction}
        >
            <View style = {styles.container}>
                <Text style={styles.text}> {data.name} </Text>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#FFF',
        paddingHorizontal : 10,
        paddingVertical : 20
    },
    text : {
        fontSize : 14,
        color : '#222'
    },
    leftAction : {
        backgroundColor: '#0ad11e',
        justifyContent: 'center',
        flex: 1
    },
    textLeftAction : {
        padding: 20,
        color: '#FFF',
        fontSize: 16
    },
    rightAction : {
        backgroundColor: '#b80000',
        justifyContent: 'center',
        textAlign : 'center',
        flex: 1
    },
    textRightAction : {
        padding: 20,
        color: '#FFF',
        fontSize: 16
    }
});