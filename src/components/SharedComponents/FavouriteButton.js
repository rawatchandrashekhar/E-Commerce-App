import React,{memo} from 'react'
import { View, TouchableOpacity } from 'react-native'
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import { Colors } from '../../assets/colors/Color'

const FavouriteButton = ({ selected, setSelected, handlePress }) => {

    console.log("fav. button!!!!!!!!!!!!");

    const handleChange = () => {
        setSelected(!selected)
        handlePress(!selected)
    }

    return (<>
        <View style={{ position: "absolute", left: 5, top: 5, zIndex: 4 }} >
            <TouchableOpacity onPress={() => handleChange()} style={{
                width: 30, height: 30, borderRadius: 15, backgroundColor: Colors.white, justifyContent: "center", alignItems: "center", elevation: 20, shadowColor: '#52006A'
            }} >
                <MCI name={selected ? 'heart' : 'heart-outline'} size={23} style={{ top: 0.5, color: selected ? Colors.indianred : Colors.grey }} />
            </TouchableOpacity>
        </View>
    </>
    )
}

export default memo(FavouriteButton)