import React, { useState, memo } from 'react'
import { StyleSheet, Text, View, Modal, Dimensions } from 'react-native'
import TouchableOpacityComponent from './TouchableOpacityComponent';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../assets/colors/Color';
import II from "react-native-vector-icons/Ionicons"

const { width, height } = Dimensions.get("screen");

const ModalComponent = ({ children, modalVisible, setModalVisible }) => {

    console.log("CHILDREN OF MODAL COMPONENT>>>>>>>>>>>>", children);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <LinearGradient colors={['#fff', '#fff', Colors.lightskyblue, Colors.lightskyblue]}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: -0.5 }} style={{ ...styles.modalView, position: "relative" }}>
                        <TouchableOpacityComponent onPress={() => setModalVisible(false)} style={{ position: "absolute", top: 30, right: 30, zIndex: 1, width: "100%", alignItems: "flex-end" }}>
                            <II name="close-circle-outline" size={30} color={'#000'} />
                        </TouchableOpacityComponent>
                        {children}
                    </LinearGradient>
                </View>
            </Modal>
        </View>
    )
}

ModalComponent.defaultProps = {
    children: <Text style={{ color: "#000" }} >Add modal content by a children prop</Text>,
    modalVisible: false,
    setModalVisible: () => { }
}

export default memo(ModalComponent)

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
        // height: height,
        // width: width,
        // backgroundColor:"green"
    },
    modalView: {
        // margin: 20,
        backgroundColor: 'white',
        // borderRadius: 20,
        // padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "100%",
        height: "100%",
        // backgroundColor: "red"
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})