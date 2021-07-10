import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebaseApp from '../../utils/db';
import firebase from 'firebase';
import 'firebase/firestore';

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';

export default function Account() {

    //Hook de estado inicial
    const [login, setLogin] = useState(null);

    firebase.auth().onAuthStateChanged((user) => {
        user ? (setLogin(true)) : (setLogin(false));
    });

    if (login == null) {
        return <Text>Cargando...</Text>
    }

    return login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})
