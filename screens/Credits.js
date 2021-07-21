import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Credits() {
    return (
        <View style={styles.container}>
            <Image 
                source= {require("../assets/icon.png")}
                resizeMode = "contain"
                style = {styles.image}
            />
            <Text>Programado por:</Text>
            <Text style={styles.credito}>Ing. Pablo Orejuela</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    credito: {
        fontWeight: "bold"
    },
    container: {
        marginTop: 20,
        alignItems: "center"
    },
    image: {
        marginTop: 100,
        height: 200
    }
})
