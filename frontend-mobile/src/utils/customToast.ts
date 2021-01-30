import Toast from 'react-native-tiny-toast';
import errorIcon from '../assets/images/error.png';

export const toastError = (msg: string) => Toast.show(msg, {
    position: Toast.position.TOP,
    containerStyle: {
        backgroundColor: '#e44c5c',
        borderRadius: 15,
        marginTop: 80
    },
    textStyle: {
        color: '#FFF',
    },
    imgStyle: {},
    mask: false,
    maskStyle: {},
    duration: 2000,
    animation: true,
    imgSource: errorIcon
});

export const toastSuccess = (msg: string) => Toast.showSuccess(msg, {
    position: Toast.position.TOP,
    containerStyle: {
        backgroundColor: '#32CD32',
        borderRadius: 15,
        marginTop: 80
    },
    textStyle: {
        color: '#FFF',
    },
    imgStyle: {},
    mask: false,
    maskStyle: {},
    duration: 2000,
    animation: true,
});