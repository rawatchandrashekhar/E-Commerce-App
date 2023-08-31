import { StyleSheet, Dimensions } from "react-native";
import { FontFamily } from "../fonts/FontFamily";
import { Colors } from "../colors/Color";

const { width, height } = Dimensions.get('screen')

export const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        width: '100%',
        height: 90,
        backgroundColor: Colors.lightskyblue
    },
    headerTxt: {
        color: Colors.GREY2,
        fontSize: 18,
        fontFamily: FontFamily.PoppinsMedium,
    },
    dashboardTxt: {
        fontSize: 19,
        color: Colors.Comp,
        fontFamily: FontFamily.PoppinsMedium
    },
    hamBurgerImage: {
        marginLeft: 10
    },
    cartStyle: {
        marginRight: 10
    },
    dashboardScrollviewContainer: {
        flexDirection: "row",
        alignItems: "center",
        margin: 5,
        flex: 1
    },
    dashboardMapContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 100,
        // backgroundColor: '#fff'
    },
    dashboardMapImageContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: Colors.lightskyblue
    },
    dashboardMapTextView: {
        marginTop: 3
    },
    dashboardMapText: {
        fontFamily: FontFamily.PoppinsMedium,
        color: "#000"
    },
    drawerContentView: {
        backgroundColor: Colors.white,
        overflow: 'hidden',
        width: width
    }
})