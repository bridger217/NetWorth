import React, { useState, useEffect } from 'react'
import { Image, Text, TextInput, View, TouchableOpacity, Dimeonsions, Dimensions } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DropDownPicker from 'react-native-dropdown-picker'
import styles from './styles'
import { firebase } from '../../firebase/config'
import Icon from 'react-native-vector-icons/AntDesign'
import { Overlay } from 'react-native-elements'
import CurrencyInput from 'react-native-currency-input';

export default function NewPurchaseScreen(props) {
    const [purchaseName, setPurchaseName] = useState('')
    const [categoryNames, setCategoryNames] =  useState([])
    const [selectedCategoryName, setSelectedCategoryName] = useState('')
    const [loading, setLoading] = useState(true)
    const [newCategoryViewVisible, setNewCategoryViewVisible] = useState(false)
    const [newCategoryName, setNewCategoryName] = useState('')
    const [newCategoryLoading, setNewCategoryLoading] = useState(false)
    const [newPurchasePrice, setNewPurchasePrice] = useState(0.0)

    const toggleCategoryViewVisible = () => {
        setNewCategoryViewVisible(!newCategoryViewVisible)
    }

    const onNewPurchaseButtonPress = () => {
        firebase.firestore().collection('users').doc(props.user.id).collection('purchases')
        .add({
            name: purchaseName,
            category: selectedCategoryName,
            price: newPurchasePrice
        })
        .then(
            props.navigation.navigate('Home', user=props.user)
        )
    }

    const loadNewCategories = () => {
        firebase.firestore().collection('users').doc(props.user.id).collection('categories')
            .get()
            .then(documentSnapshot => {
                const retrievedCategoryNames = []
                documentSnapshot.forEach(category => {
                    retrievedCategoryNames.push(category.id)
                })
                setCategoryNames(retrievedCategoryNames.sort())
            })
            .catch(error => alert(error))
    }

    const submitNewCategory = () => {
        setNewCategoryLoading(true)
        const newCategoryRef = firebase.firestore().collection('users').doc(props.user.id).collection('categories').doc(newCategoryName)
        newCategoryRef
            // TODO: throw error if already exists. maybe use add and an auto-id?
            .set({})
            .then(resp => {
                loadNewCategories()
                setSelectedCategoryName(newCategoryName)
                setNewCategoryName('')
                setNewCategoryLoading(false)
                toggleCategoryViewVisible()
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        // Fetch category names from backend on load
        loadNewCategories()
    }, [])


    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/icon.png')}
                />
                <CurrencyInput
                        style={[styles.input, styles.priceInput]}
                        value={newPurchasePrice}
                        onChangeValue={setNewPurchasePrice}
                        unit="$"
                        delimiter=","
                        separator="."
                        precision={2}
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
                <View style={styles.categoryRow}>
                    <DropDownPicker
                        style={styles.picker}
                        containerStyle={styles.pickerContainer}
                        dropDownStyle={styles.pickerDropdown}
                        placeholderStyle={styles.pickerPlaceholder}
                        selectedLabelStyle={styles.pickerSelectedLabel}
                        items={categoryNames.length == 0 
                            ? [{label: "", value: ""}] : 
                            categoryNames.map(name => (
                                {
                                label: name,
                                value: name
                                } 
                            ))
                        }
                        defaultNull
                        placeholder="Category"
                        onChangeItem={item => setSelectedCategoryName(item.value)}
                    />
                    <TouchableOpacity onPress={toggleCategoryViewVisible}>
                        <Icon name='plussquare' color='#788eec' size={48}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.button, {marginTop: 150}]}
                    onPress={() => onNewPurchaseButtonPress()}>
                    <Text style={styles.buttonTitle}>Submit</Text>
                </TouchableOpacity>
                <Overlay
                    isVisible={newCategoryViewVisible}
                    onBackdropPress={toggleCategoryViewVisible}>
                        <View 
                        height={0.4*Dimensions.get('window').height}
                        width={0.8*Dimensions.get('window').width}>
                            <TextInput
                                style={styles.newCategoryInput}
                                placeholder='Category Name'
                                placeholderTextColor="#aaaaaa"
                                onChangeText={(text) => setNewCategoryName(text)}
                                value={newCategoryName}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                            />
                            <TouchableOpacity
                            style={styles.newCategoryButton}
                            onPress={submitNewCategory}>
                                <Text style={styles.buttonTitle}>Create category</Text>
                            </TouchableOpacity>
                        </View>
                </Overlay>
            </KeyboardAwareScrollView>
        </View>
    )
}