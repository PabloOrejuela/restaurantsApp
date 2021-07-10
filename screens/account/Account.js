import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebaseApp from '../../utils/db';
import firebase from 'firebase';
import 'firebase/firestore';

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';
import { isUserLogged } from '../../utils/actions';
import Loading from '../../components/Loading';

export default function Account() {

    //Hook de estado inicial
    const [login, setLogin] = useState(null);

    useEffect(() => {
        //Verifico el usuario logeado
        setLogin(isUserLogged());
    }, [])

    if (login == null) {
        return <Loading isVisible={true} text="cargando... espere"/>
    }

    return login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})
