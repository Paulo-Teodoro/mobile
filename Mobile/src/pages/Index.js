import React, { useEffect, useState } from 'react'
import {View, Text, Image, StatusBar, StyleSheet, FlatList} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements';

import avatar from "../../assets/avatar.jpeg";
import api from "../service/api";
import ListItem from "../components/ListItem";

export default function Index({navigation}) {

  const [user, setUser] = useState('');
  const [materias, setMaterias] = useState(listaMaterias());

  async function listaMaterias() {
    const materias = await api.get('/materia');
    console.log(materias)
    if(materias.status == 200) {
      setMaterias(materias.data);
    } else {
      let msgError = response.data;
      console.log(msgError.mensagem);
    }
  }

  useEffect(() => {
    AsyncStorage.getItem('@user').then(user => {
      user = JSON.parse(user);
      if(!user) {
        navigation.navigate("Login");
      } else {
        setUser(user);
      }
    })
  })

  function logoff() {
    AsyncStorage.removeItem('@user');
    navigation.navigate("Login")
  }

  function settings() {
    navigation.navigate("Usuario")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image source={avatar} style={[styles.avatar]}></Image>
        </View>
        <View>
          <Text style={styles.Name}>{user.name}</Text>
          <Text style={styles.text}>Matrícula: {user.ra}</Text>
          <Text style={styles.text}>{user.email}</Text>
        </View>
        <View style={styles.areaLogout}>
          <Icon onPress={logoff} style={styles.logout} name='logout' />
          <Icon onPress={settings} style={styles.config} name='cog' type='font-awesome' />  
        </View>
      </View>
      <View>
        <FlatList
          data = {materias}
          keyExtractor = {item => item._id}
          renderItem = {
            ({item}) => (
              <ListItem
                data = {item}
              />
            )
          }
          ItemSeparatorComponent = {() => <Separator/>}
        />
      </View>
    </View>
  );
}

const Separator = () => <View style={{flex:1, height: 2, backgroundColor: '#DDD'}}></View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    paddingVertical: 10,
    width: "100%"
  },
  Name: {
    fontSize: 20,
    flexDirection: "row"
  },
  text: {
    fontSize:10,
    color: "#000"
  },
  areaLogout: {
    width: 80,
    height: 50,
    marginTop: 10,
  },
  logout: {
    paddingBottom: 10
  },
  config: {
    marginTop: 1000 
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 10
  }
});
