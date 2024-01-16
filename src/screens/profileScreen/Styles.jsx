import { StyleSheet } from "react-native";


const StylesProfileScreen = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 20,
        gap: 20,
        alignItems: 'flex-start'
    },
    profilePicture: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    userDataContainer: {
        marginTop: 10,
    },
    userTitle: {
        fontFamily: 'ComicNeue-Bold',
        fontSize: 24,
    },
    imageContainer: {
        borderRadius: 100,
    },
    userData: {
        fontFamily: 'ComicNeue-Light',
        fontSize: 18
    }
})

export default StylesProfileScreen