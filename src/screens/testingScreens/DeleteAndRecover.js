import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

function DeleteAndRecover() {
    const [getData, setData] = React.useState([
        { id: 1, name: "Chandu" },
        { id: 2, name: "Ram" },
        { id: 3, name: "Jay" },
        { id: 4, name: "Amar" }
    ]);
    const [getStoreRecoverData, setStoreRecoverData] = React.useState([]);
    const [getSorted, setSorted] = React.useState(false);

    const handleClick = (item) => {
        const iteratedResult = getData.filter((i, index) => {
            if (item.id !== i.id) {
                return i;
            }
            if (item.id === i.id) {
                setStoreRecoverData((prev) => [...prev, i]);
            }
        });
        console.log("iteratedResult", iteratedResult);
        setData(iteratedResult);
    };

    const handleRecoverData = () => {
        console.log("recover state", getStoreRecoverData);
        const shiftedElements = getStoreRecoverData.pop();
        setData((prev) => [...prev, shiftedElements]);
        getData.length === 3 && setSorted(true);
    };

    React.useEffect(() => {
        const sortedResult = getData.sort((a, b) => a.id - b.id);
        console.log("sortedResult", sortedResult);
        setData(sortedResult);
    }, [getSorted]);

    return (
        <>
            {getData.map((item, index) => {
                return (
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => handleClick(item)}
                            style={{
                                border: "2px solid grey",
                                width: 15,
                                height: 15,
                                margin: 10,
                                borderRadius: 10,
                                backgroundColor: "red"
                            }}
                        />
                        <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000" }}>
                            {item.name}
                        </Text>
                    </View>
                );
            })}
            {getStoreRecoverData.length > 0 && (
                <TouchableOpacity
                    style={{
                        width: 150,
                        height: 30,
                        backgroundColor: "green",
                        borderRadius: 10,
                        alignSelf: "center",
                        marginTop: 20
                    }}
                    onPress={() => handleRecoverData()}
                >
                    <Text style={{ textAlign: "center", color: "#fff", top: 4 }}>
                        Recover Deleted Data
                    </Text>
                </TouchableOpacity>
            )}
            {getData.length === 4 && getSorted && (
                <TouchableOpacity
                    style={{
                        width: 150,
                        height: 30,
                        backgroundColor: "green",
                        borderRadius: 10,
                        alignSelf: "center",
                        marginTop: 20
                    }}
                    onPress={() => setSorted(false)}
                >
                    <Text style={{ textAlign: "center", color: "#fff", top: 4 }}>
                        Sorted All Elements
                    </Text>
                </TouchableOpacity>
            )}
        </>
    );
}

export default DeleteAndRecover;
