import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import styles from '../styles'

const styles = StyleSheet.create({})

export default function HomeScreen(props) {
    const onNewPurchaseButtonPress = () => {
        console.log(props)
        props.navigation.navigate('NewPurchase', user=props.user)
    }

    return (
        <View>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onNewPurchaseButtonPress()}>
                    <Text style={styles.buttonTitle}>New Purchase</Text>
            </TouchableOpacity>
        </View>
    )
}