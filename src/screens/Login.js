import React from 'react'
import { StyleSheet, View, Text, KeyboardAvoidingView, Dimensions, Image, TextInput, ScrollView, StatusBar, TouchableOpacity, BackHandler, Alert, Keyboard } from 'react-native'
import HideKeyboard from '../components/SharedComponents/HideKeyboard'
import { useFocusEffect, useIsFocused } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';
import II from "react-native-vector-icons/Ionicons"
import { Colors } from '../assets/colors/Color'
import { FontFamily } from '../assets/fonts/FontFamily'
import Button from '../components/SharedComponents/Button'
import Input from '../components/SharedComponents/Input'
import Space from '../components/SharedComponents/Space'
import { navigate } from '../navigation/navigationService/NavigationService'
import { getStringData, storeObjectData } from '../storage/asyncStorage/AsyncDataStorage'
import strings from '../localization/localizedStrings/LocalizedStrings'
import { db } from '../helper/sqliteDatabase/fetchData/FetchUserDetail'
import { AlertDanger, AlertSuccess, AlertWarning } from '../components/SharedComponents/Alert'
import Loader from '../components/SharedComponents/Loader'
import Logo from '../helper/Logo';
import { useDispatch } from 'react-redux';
import { addUserData } from '../storage/redux/slices/AddUserDetailData';

const { width, height } = Dimensions.get('screen')

const RegistrationForm = () => {
    return <LinearGradient colors={['#fff', '#fff', Colors.lightskyblue, Colors.lightskyblue]}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0 }} style={{
            // flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
            width: width,
            height: height,
        }} >
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
    </LinearGradient>
}

const Login = ({ navigation }) => {

    const refRBSheet = React.useRef();

    let dispatch = useDispatch()

    const [getMail, setMail] = React.useState('')
    const [getPassword, setPassword] = React.useState('')
    const [getLoader, setLoader] = React.useState(false)
    // const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

    // React.useEffect(() => {
    //     const keyboardDidShowListener = Keyboard.addListener(
    //         'keyboardDidShow',
    //         () => {
    //             setKeyboardVisible(true);
    //         },
    //     );
    //     const keyboardDidHideListener = Keyboard.addListener(
    //         'keyboardDidHide',
    //         () => {
    //             setKeyboardVisible(false);
    //         },
    //     );

    //     return () => {
    //         keyboardDidHideListener.remove();
    //         keyboardDidShowListener.remove();
    //     };
    // }, []);

    // useFocusEffect(
    //     React.useCallback(() => {
    //         const backAction = () => {
    //             BackHandler.exitApp()
    //             return true;
    //         };
    //         const backHandler = BackHandler.addEventListener(
    //             'hardwareBackPress',
    //             backAction,
    //         );
    //         return () => backHandler.remove();
    //     }, [])
    // )

    const selectedLanguage = async () => {
        let fetchLang = await getStringData('Language')
        console.log("fetchLang", fetchLang);
        if (fetchLang) {
            strings.setLanguage(fetchLang)
        }
    }

    const handleAuth = async () => {
        try {
            setLoader(true)
            await db.transaction(async (tx) => {
                await tx.executeSql(
                    'SELECT * FROM UserDetail where UserMail=? OR UserPassword=?',
                    [getMail, getPassword],
                    async (tx, results) => {
                        if (results.rows.length != 0) {
                            await tx.executeSql('SELECT * FROM UserDetail where UserMail=?', [getMail], async (tx, resultMail) => {
                                if (resultMail.rows.length != 0) {
                                    await tx.executeSql('SELECT * FROM UserDetail where UserPassword=?', [getPassword], async (tx, resultPass) => {
                                        if (resultPass.rows.length != 0) {
                                            // var temp = {};
                                            let promise = new Promise((resolve, reject) => {
                                                const temp = [];
                                                // setTimeout(() => {
                                                for (let i = 0; i < results.rows.length; ++i) {
                                                    // temp = results.rows.item(i);
                                                    // console.log("setLoader(true)", getLoader);
                                                    temp.push(results.rows.item(i));
                                                }
                                                resolve(temp);
                                                // }, 2500);
                                            })
                                            promise.then((result) => {
                                                // console.log("USER DETAILS AFTER LOGIN", result);
                                                storeObjectData('USER_DETAIL', result[0]);
                                                dispatch(addUserData(result[0]));
                                                AlertSuccess('Successfully Login!');
                                                navigate('Main');
                                                setLoader(false);
                                            }).catch((err) => {
                                                console.log("EXCEPTION IN LOGIN", err);
                                            })
                                            // console.log("setLoader(false)", getLoader);
                                            // console.log("results.rows.item(i)", temp);
                                        } else {
                                            AlertWarning('YOUR PASSWORD IS NOT CORRECT')
                                            setPassword('')
                                            setMail('')
                                            setLoader(false)
                                            // Alert.alert('YOUR PASSWORD IS NOT CORRECT')
                                        }
                                    })
                                } else {
                                    AlertWarning('YOUR MAIL IS NOT CORRECT')
                                    setPassword('')
                                    setMail('')
                                    setLoader(false)
                                    // Alert.alert('YOUR MAIL IS NOT CORRECT')
                                }
                            })
                        } else {
                            AlertDanger('YOU ARE NOT REGISTERED YET!')
                            setLoader(false)
                            // Alert.alert('YOU ARE NOT REGISTERED YET!')
                        }
                    }
                );
            });
        } catch (e) {
            console.log("EXCEPTION IN FETCH USER DETAIL", e);
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            selectedLanguage()
        }, [])
    )

    const handleResetPass = () => {
    }

    const handleCreateAccount = () => {
        // refRBSheet.current.open()
    }

    return (
        <HideKeyboard>
            <KeyboardAvoidingView style={styles.keyboardAvoidViewContainer}>
                {/* <StatusBar backgroundColor={Colors.lightskyblue} barStyle={'dark-content'} /> */}
                <LinearGradient colors={['#fff', '#fff', Colors.lightskyblue, Colors.lightskyblue]}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }} style={{
                        flex: 1,
                        justifyContent: 'center',
                        // alignItems: 'center',
                        width: width,
                        height: height
                    }} >
                    {getLoader ? <View style={{ flex: 1, backgroundColor: Colors.lightskyblue, width: width, alignItems: "center", justifyContent: "center" }} ><Loader /></View> :
                        <>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()} style={{ position: "absolute", top: 50, paddingLeft: 20 }} >
                                <II name='ios-arrow-back-sharp' size={30} style={{ color: Colors.white }} />
                            </TouchableOpacity>
                            <View style={[styles.viewContainer, {}]}>
                                <ScrollView showsVerticalScrollIndicator={false} >
                                    <Logo />
                                    <View style={{ marginTop: 70 }}>
                                        <Text style={styles.loginTxtStyle} >{strings.LoginToYourAccount}</Text>
                                        <Input onChange={(txt) => setMail(txt)} placeholderText={strings.EmailOrMobileNumber} keyType={'email-address'} />
                                        <Space mV={5} />
                                        <Input onChange={(txt) => setPassword(txt)} placeholderText={strings.Password} keyType={'visible-password'} />
                                        <View style={{ marginTop: 30 }}>
                                            <Button handlePress={() => handleAuth()} btnText={strings.Login} />
                                        </View>
                                        <View style={styles.forgetAndNewContainer}>
                                            <View style={styles.forgetAndNewSubContainerOne}>
                                                <Text style={styles.forgetAndNewTextOne} >{strings.ForgetPassword}?</Text>
                                                <TouchableOpacity activeOpacity={0.9} onPress={() => handleResetPass()} >
                                                    <Text style={styles.forgetAndNewTextTwo} >{strings.ResetHere}</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.forgetAndNewSubContainerTwo}>
                                                <Text style={styles.forgetAndNewTextOne} >{strings.NewToShoppy}?</Text>
                                                <TouchableOpacity activeOpacity={0.9} onPress={() => handleCreateAccount()} >
                                                    <Text style={styles.forgetAndNewTextTwo} >{strings.CreateAccount}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        {/* <Space mV={60} /> */}
                                    </View>
                                </ScrollView>
                            </View>
                        </>}
                </LinearGradient>
            </KeyboardAvoidingView>
        </HideKeyboard >
    )
}

export default Login

const styles = StyleSheet.create({
    keyboardAvoidViewContainer: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: Colors.white
    },
    viewContainer: {
        width: width * 0.9,
        alignSelf: "center",
        paddingHorizontal: 10
    },
    loginTxtStyle: {
        fontFamily: FontFamily.PoppinsMedium,
        color: Colors.black,
        fontSize: 17,
        marginBottom: 10
    },
    forgetAndNewContainer: {
        alignItems: "center"
    },
    forgetAndNewSubContainerOne: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15
    },
    forgetAndNewSubContainerTwo: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    forgetAndNewTextOne: {
        fontSize: 14
    },
    forgetAndNewTextTwo: {
        fontSize: 14,
        color: Colors.lightskyblue,
        marginLeft: 5
    }
})