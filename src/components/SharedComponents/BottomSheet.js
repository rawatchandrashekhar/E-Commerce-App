import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet'
import { Colors } from '../../assets/colors/Color'

const BottomSheet = ({ refRBSheet, content, height }) => {
    return (
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            height={height}
            customStyles={{
                wrapper: {
                    backgroundColor: 'rgba(52, 52, 52, 0.4)',
                    // opacity: 0.7
                },
                draggableIcon: {
                    backgroundColor: "#000"
                },
                container: {
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: Colors.white,
                }
            }}
        >
            <View style={{ marginHorizontal: 15 }} >
                {content}
            </View>
        </RBSheet>
    )
}

BottomSheet.defaultProps = {
    content: <Text>use 'content' prop to add content of RBSheet</Text>,
    height: 300
}

export default BottomSheet

const styles = StyleSheet.create({})