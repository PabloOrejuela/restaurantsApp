//Modelo
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {firebaseApp} from './db';
//import * as firebase from 'firebase';


const db = firebase.firestore(firebaseApp);

export const isUserLogged = () => {
    let isLogged = false;

    firebase.auth().onAuthStateChanged((user) => {
        user !== null && (isLogged = true);
    });
    return isLogged;
}

export const getCurrentUser = () => {
    
    return firebase.auth().currentUser;
}

export const registerUser = async(email, password) => {
    const result = {
        statusResponse: true,
        error: null
    }

    try {
        //usamos la función de autorización de firebase
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
        result.statusResponse = false;
        result.error = "Este email ya está registrado";
    }

    return result;
}

//Login por email
export const loginWithEmailAndPassWord = async(email, password) => {
    const result = {
        statusResponse: true,
        error: null
    }

    try {
        //usamos la función de autorización de firebase
        await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
        result.statusResponse = false;
        result.error = "Usuario o contraseña no válidos";
    }

    return result;
}

/*
    Metodo que cierra sesión
*/
export const closeSession = () => {
    return firebase.auth().signOut();
}