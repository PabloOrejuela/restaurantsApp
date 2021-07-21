import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import RegisterForm from '../../components/account/RegisterForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Register() {
    return (
        <KeyboardAwareScrollView>
            <Image 
                source= {require("../../assets/icon.png")}
                resizeMode = "contain"
                style = {styles.image}
            />
            <RegisterForm />
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: 20,
        height: 120,
        width: "100%",
        marginBottom: 10
    }
})

