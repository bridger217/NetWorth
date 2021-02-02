import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './styles';

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