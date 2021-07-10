import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function UserGuest() {

    //Creo la variable que me permite navegar
    const navigation = useNavigation();

    return (
        <ScrollView
            centerView
            style={styles.viewBody}
        >
            <Image 
                source={require("../../assets/icon.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil en Restaurantes</Text>
            <Text style={styles.description}>
                ¿Cómo describirías tu restaurant favorito? Busca y visuliza los mejores restaurants de
                una manera sencilla, califica cual te ha gustado mas y comenta tu experiencia.
            </Text>
            <Button 
                buttonStyle={styles.button}
                title = "Ver tu perfil"
                onPress = {() => navigation.navigate("login")}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30
    },
    image: {
        height: 300,
        width: "100%",
        marginTop: 20,
        marginBottom: 5,
        //alignItems: "center"
    },

    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginVertical: 10,
        textAlign: "center"
    },
    description:{
        textAlign: "center",
        marginBottom: 20,
        color: "#521e08"
    },
    button: {
        backgroundColor: "#521e08"
    }
})
