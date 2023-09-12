import React from 'react'
import { TouchableOpacity } from 'react-native'

const TouchableOpacityComponent = ({ children, style, onPress, disable }) => {
    return (
        <TouchableOpacity activeOpacity={0.9} style={style} onPress={onPress} disabled={disable} >
            {children}
        </TouchableOpacity>
    )
}

TouchableOpacityComponent.defaultProps = {
    disable: false,
    onPress: () => { }
}

export default TouchableOpacityComponent