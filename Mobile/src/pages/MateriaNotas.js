import * as React from 'react';
import { useEffect, useState } from 'react'
import {SafeAreaView, View, Image, Text, StatusBar, TextInput, StyleSheet, Touchable, TouchableOpacity, FlatList, ListItem} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import api from '../service/api';
import avatar from "../../assets/avatar.jpeg";

export default function MateriaNotas({ route, navigation }) {

    const [user, setUser] = useState('');
    const materia = route.params;
    const [notas, setNotas] = useState();

    async function listaNotas() {
        const notas = await api.get('/nota-materia',{
            params: {
                Materia: materia.materia,
                User: user._id
            }
        });
        console.log(notas.data)
        if(notas.status == 200) {
        setNotas(notas.data);
        } else {
        let msgError = response.data;
        console.log(msgError.mensagem);
        }
    }

    

    useEffect(() => {
        if(!notas) {
            listaNotas()
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
        <Text>{item.bimestre}°bi - {item.pontuacao}</Text>
    );

    return (
        <View style={styles.container}>
            <View>
                <Image source={avatar} style={[styles.avatar]}></Image>
            </View>
            <View>
                <Text style={styles.title}>NOTAS</Text>
            </View>
            <View>
                <FlatList
                    data={notas}
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