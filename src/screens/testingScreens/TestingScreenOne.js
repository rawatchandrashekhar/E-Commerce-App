import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addSelectedOptions } from '../../storage/redux/slices/testingSlices/TestingSliceOne'

const TestingScreenOne = () => {

    const dispatch = useDispatch()

    const data = [
        {
            questionId: 1,
            question: "How are you?",
            options: [
                { id: 0, optName: "Good" },
                { id: 1, optName: "Great" },
                { id: 2, optName: "Very-good" },
                { id: 3, optName: "Awesome" },
            ]
        },
        {
            questionId: 2,
            question: "How are you?",
            options: [
                { id: 0, optName: "Good" },
                { id: 1, optName: "Great" },
                { id: 2, optName: "Very-good" },
                { id: 3, optName: "Awesome" },
            ]
        },
        {
            questionId: 3,
            question: "How are you?",
            options: [
                { id: 0, optName: "Good" },
                { id: 1, optName: "Great" },
                { id: 2, optName: "Very-good" },
                { id: 3, optName: "Awesome" },
            ]
        },
    ]

    const RenderItem = ({ item }) => {

        const [selectedOpt, setSelectedOpt] = React.useState("")
        const [selectedQues, setSelectedQues] = React.useState("")

        const fetchSelectedOptData = useSelector(state => state.testingOne.uniqueSelectedOptions)
        console.log("fetchdata", fetchSelectedOptData);

        React.useEffect(() => {
            fetchSelectedOptData.map((fethItm, fethInd) => {
                if (fethItm.questionId == item.questionId) {
                    setSelectedOpt(fethItm.optItem);
                    setSelectedQues(fethItm.questionId);
                }
            })
        }, [fetchSelectedOptData])


        const handleSelected = (questionId, optItem) => {
            let selectedData = {
                questionId,
                optItem
            }
            console.log(selectedData);
            dispatch(addSelectedOptions(selectedData))
        }

        console.log("selectedopt", selectedOpt);
        console.log("selectedques", selectedQues);

        return <View>
            <Text>{item.question}</Text>
            <View style={{ flexDirection: "row" }} >
                {item.options.map((optItem, optIndex) => {
                    return <TouchableOpacity onPress={() => handleSelected(item.questionId, optItem.id)} key={optIndex} style={{ alignItems: "center", marginHorizontal: 10, marginTop: 5, marginBottom: 10, borderWidth: 1, borderRadius: 5, padding: 5, backgroundColor: (selectedOpt == optItem.id && selectedQues == item.questionId) ? "red" : null }} >
                        <Text style={{ marginBottom: 4 }} >{optItem.optName}</Text>
                        <Text>{optItem.id}</Text>
                    </TouchableOpacity>
                })}
            </View>
        </View>
    }

    const fetchDataForCount = useSelector(state => state.testingOne.uniqueSelectedOptions)
    const selectedCounts = fetchDataForCount.reduce((acc, next) => {
        return acc + next.optItem
    }, 0)

    const [getTotalCount, setTotalCount] = React.useState("")

    const fetchTotalCounts = () => {
        let promise = new Promise((resolve, reject) => {
            let tempArr = []
            data.map((item, index) => {
                const totalCounts = data[index].options.reduce((acc, next) => {
                    return acc + next.id
                }, 0)
                tempArr.push(totalCounts)
            })
            resolve(tempArr)
        })

        promise.then((result) => {
            let finalResult = result.reduce((acc, next) => {
                return acc + next
            }, 0)
            setTotalCount(finalResult)
        }).catch((err) => {
            alert(err)
        })
    }

    React.useEffect(() => {
        fetchTotalCounts()
    }, [])

    return (
        <View style={{ marginTop: 50 }} >
            <FlatList
                data={data}
                renderItem={({ item }) => <RenderItem item={item} />}
                keyExtractor={(item, index) => index}
            />
            <Text style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }} >{selectedCounts}/{getTotalCount}</Text>
        </View>
    )
}

export default TestingScreenOne

const styles = StyleSheet.create({})