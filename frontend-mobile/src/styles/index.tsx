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
    beige: "#937C1C"
};

export const commonCss = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: colors.secondary
    }
});

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

export const buttonIconCss = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        flexDirection: 'row',
        width: 334,
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    primaryContainer: {
        borderRadius: 10,
        width: 284,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    primaryText: {
        color: colors.black,
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 22,
        letterSpacing: -0.0124,
    },
    arrowContainer: {
        backgroundColor: colors.beige,
        height: 50,
        width: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export const homeCss =  StyleSheet.create({
    titleContainer: {
        marginTop: 40
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 35,
        letterSpacing: -0.0124,
        color: colors.white
    },
    subTitleContainer: {
        marginTop: 50,
        alignItems: 'center'
    },
    subTitleText: {
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.0124,
        color: colors.lightGray
    },
    btnContainer: {
        marginTop: 50
    }
});