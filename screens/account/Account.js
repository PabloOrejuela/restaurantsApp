import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebaseApp from '../../utils/db';
import firebase from 'firebase';
import 'firebase/firestore';

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';
import { getCurrentUser, isUserLogged } from '../../utils/actions';
import Loading from '../../components/Loading';
import { useFocusEffect } from '@react-navigation/native';

export default function Account() {

    //Hook de estado inicial
    const [login, setLogin] = useState(null);

    useFocusEffect(
        useCallback(() => {
            
            //extraigo el usuario actual
            const user = getCurrentUser();
            
            //Verifico el usuario logeado
            user ? setLogin(true) : setLogin(false);
        }, [])
    )

    
    if (login == null) {
        return <Loading isVisible={true} text="cargando... espere"/>
    }

    return login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})
