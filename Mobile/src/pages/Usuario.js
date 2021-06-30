import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Image, Text, StatusBar, TextInput, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import avatar from "../../assets/avatar.jpeg";

export default function Usuario({navigation}) {

    const [user, setUser] = useState('');
    const [nome, setNome] = useState('');
    const [ra, setRa] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('@user').then(user => {
        if(!user){
            navigation.navigate('Login');
        }else {
            setUser(JSON.parse(user))
        }
        })
    })

    function back(){
        navigation.navigate("Index")
    }
    return (
        <View style={styles.container}>
            <View>
                <Image source={avatar} style={[styles.avatar]}></Image>
            </View>
            <View style={styles.form}>
                <Text style= {styles.label}>Nome</Text>
                <TextInput style={styles.input} 
                placeholder = "Nome" 
                placeholderTextColor = "#888" 
                autoCapitalize = "words"
                value = {nome}
                onChangeText = {setNome}
                />

                <Text style= {styles.label}>Email</Text>
                <TextInput style={styles.input} 
                placeholder = "Email" 
                placeholderTextColor = "#888" 
                textContentType = "emailAddress"
                value = {email}
                onChangeText = {setEmail}
                />

                <Text style= {styles.label}>Registro Acadêmico</Text>
                <TextInput style={styles.input} 
                placeholder = "RA" 
                placeholderTextColor = "#888" 
                keyboardType="numeric"
                maxLength= {10}
                value = {ra}
                onChangeText = {setRa}
                />

                <Text style= {styles.label}>Senha</Text>
                <TextInput style={styles.input} 
                placeholder = "Senha" 
                placeholderTextColor = "#888" 
                secureTextEntry = {true}
                maxLength = {10}
                value = {password}
                onChangeText = {setPassword}
                />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={back}>
                <Text>Voltar</Text>
            </TouchableOpacity>
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
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 80,
        marginTop: 20
      },
      input: {
        borderWidth: 1,
        borderColor: "#DDD",
        paddingHorizontal: 20,
        borderRadius: 5,
        height: 50,
        fontSize: 18
      },
      label:{
        fontSize:18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 15,
        color: "#555"
      },
      button: {
        backgroundColor: "#3259a8",
        marginTop: 20,
        borderRadius: 10,
        textAlign: "center",
        padding: 4
      },
      textButton: {
        color: '#FFF',
        fontSize: 30,
        textAlign: "center"
      }
});