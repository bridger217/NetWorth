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
    categoryRow: {
        flex:1,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        flexDirection: "row",
    },

    // https://github.com/hossein-zare/react-native-dropdown-picker
    picker: {
        backgroundColor: 'white',
        borderColor: 'white',
    },
    pickerContainer: {
        flex:1,
        marginRight: 10,
    },
    pickerDropdown: {
        borderRadius: 5,
        backgroundColor: 'white',
    },
    pickerPlaceholder: {
        color: 'rgb(191,191,191)',
    },
    pickerSelectedLabel: {
        color: 'black',
    }
})