import React from 'react'
import { ActivityIndicator } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements/dist/overlay/Overlay'

export default function Loading({isVisible, text}) {
    return (
        <Overlay
            isVisible = {isVisible}
            windowBackgroundcolor = "rgba(0.0.0,0.5"
            overlayBackgroundColor = "transparent"
            overlayStyle={styles.overlay}
        >
            <View>
                <ActivityIndicator/>
                {
                    text && <Text>{text}</Text>
                }
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay: {
        height: 100,
        width: 200,
        backgroundColor: "#fff",
        borderColor: "#fa2d25",
        borderWidth: 2,
        borderRadius: 10
    }
})
