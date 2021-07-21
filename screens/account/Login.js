import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useNavigation } from '@react-navigation/native';

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LoginForm from '../../components/account/LoginForm';

export default function Login() {
    
    return ( 
        <KeyboardAwareScrollView>
            <Image 
                source= {require("../../assets/icon.png")}
                resizeMode = "contain"
                style = {styles.image}
            />
            <View style={styles.container}>
                <LoginForm/>
                <CreateAccount />
            </View>
            <Divider style = {styles.divider} />

        </KeyboardAwareScrollView>
    )
}

function CreateAccount(props) {
    const navigation = useNavigation();
    return(
        <Text 
            style={styles.register}
            onPress={() => navigation.navigate("register")}
        >
            Aun no tienes una cuenta? {" "}
            <Text style={styles.btnRegister}>Regístrate</Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 180,
        width: "100%",
        marginBottom: 20
    },
    container: {
        marginHorizontal: 40
    },
    divider: {
        backgroundColor: "#521e08",
        margin: 40
    },
    register: {
        marginTop: 15,
        marginHorizontal: 10,
        alignSelf: "center"
    },
    btnRegister: {
        color: "#521e08",
        fontWeight: "bold"
    }
})
