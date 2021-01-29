import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const colors = {
    white: "#FFFFFF",
    lightGray: "#F2F2F2",
    mediumGray: "#6C6C6C",
    subTitleGray: "#CDCDCD",
    textGray: "#9E9E9E",
    black: "#000000",
    primary: "#FFC700",
    secondary: "#525252",
    borderGray: "#E1E1E1",
    beige: " #937C1C"
};

export const leftHeaderCss = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        justifyContent: 'center'
    },
    emptyView: {
        width: 18,
        height: 18,
    },
    titleTextContainer: {
        marginLeft: 13,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.0124,
        color: colors.black,
    },
});

export const rightHeaderCss = StyleSheet.create({
    container: {
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        width: 75,
        height: 26,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.0124,
        color: colors.black,
    }

});