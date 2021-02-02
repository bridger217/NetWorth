import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    // https://github.com/hossein-zare/react-native-dropdown-picker
    picker: {
        backgroundColor: 'white',
        borderColor: 'white',
    },
    pickerContainer: {
        height: 48,
        borderRadius: 5,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
    },
    pickerDropdown: {
        borderRadius: 5,
        backgroundColor: 'white',
        marginRight: 30,
    },
    pickerPlaceholder: {
        color: 'rgb(191,191,191)',
    },
    pickerSelectedLabel: {
        color: 'black',
    }
})