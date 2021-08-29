import * as React from 'react';
import { useEffect, useState } from 'react'
import {SafeAreaView, View, Image, Text, StatusBar, TextInput, StyleSheet, Touchable, TouchableOpacity, FlatList, ListItem} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import api from '../service/api';
import avatar from "../../assets/avatar.jpeg";

export default function MateriaFaltas({ route, navigation }) {

    const [user, setUser] = useState('');
    const materia = route.params;
    const [faltas, setFaltas] = useState();

    async function listaFaltas() {
        const faltas = await api.get('/falta-materia',{
            params: {
                Materia: materia.materia,
                User: user._id
            }
        });
        console.log(faltas.data)
        if(faltas.status == 200) {
        setFaltas(faltas.data);
        } else {
        let msgError = response.data;
        console.log(msgError.mensagem);
        }
    }

    

    useEffect(() => {
        if(!faltas) {
            listaFaltas()
        }
        AsyncStorage.getItem('@user').then(user => {
        if(!user){
            navigation.navigate('Login');
        }else {
            setUser(JSON.parse(user))
        }
        })
        
    })

    const renderItem = ({ item }) => (
        <Text>{item.bimestre}°bi - {item.faltas}</Text>
    );

    return (
        <View style={styles.container}>
            <View>
                <Image source={avatar} style={[styles.avatar]}></Image>
            </View>
            <View>
                <Text style={styles.title}>FALTAS</Text>
            </View>
            <View>
                <FlatList
                    data={faltas}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginHorizontal: 10,
        marginVertical: 30
    },
    title: {
        fontSize: 25
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
});