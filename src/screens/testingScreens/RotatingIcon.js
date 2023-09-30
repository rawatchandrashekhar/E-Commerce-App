import React from 'react'
import { StyleSheet, Text, View, Animated, TouchableOpacity,Easing,Image } from 'react-native'
import II from "react-native-vector-icons/Ionicons"

const RotatingIcon = () => {

    const rotateAnimation=new Animated.Value(0);

    const handleAnimation = () => {
        rotateAnimation.setValue(0)
        Animated.timing(rotateAnimation, {
            toValue: 1,
            duration: 3000,
            easing:Easing.linear,
            useNativeDriver:true
        }).start(()=>handleAnimation());
    };

    const interpolateRotating = rotateAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const animatedStyle = {
        transform: [
            {
                rotate: interpolateRotating,
            },
        ],
    };

    return (
        <View style={{width:30,height:30}} >
            <Animated.Text onPress={() => handleAnimation()} style={animatedStyle} >
                <Image source={require("../../assets/images/refresh.png")} resizeMode='contain' style={{width:30,height:30}} />
            </Animated.Text>
        </View>
    )
}

export default RotatingIcon

const styles = StyleSheet.create({})