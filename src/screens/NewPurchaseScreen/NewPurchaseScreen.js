import React, { useState, useEffect } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DropDownPicker from 'react-native-dropdown-picker'
import styles from './styles'
import { firebase } from '../../firebase/config'

export default function NewPurchaseScreen(props) {
    const [purchaseName, setPurchaseName] = useState('')

    const categoryNames = []
    const [categoryName, setCategoryName] = useState('')

    useEffect(() => {
        // Fetch category names from backend
        const categoriesRef = firebase.firestore().collection('categories')
        categoriesRef
            .doc(props.user.id)
            .get()
            .then(documentSnapshot => documentSnapshot.get('categories').forEach(category => {
                categoryNames.push(category)
            }))
            .catch(error => alert(error))
    })


    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/icon.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Purchase Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setPurchaseName(text)}
                    value={purchaseName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <DropDownPicker
                    style={styles.picker}
                    containerStyle={styles.pickerContainer}
                    dropDownStyle={styles.pickerDropdown}
                    placeholderStyle={styles.pickerPlaceholder}
                    selectedLabelStyle={styles.pickerSelectedLabel}
                    items ={categoryNames.map(name => (
                        {
                          label: name,
                          value: name
                        } 
                      ))}
                    defaultNull
                    placeholder="Category"
                    onChangeItem={item => setCategoryName(item.value)}
                />
            </KeyboardAwareScrollView>
        </View>
    )
}