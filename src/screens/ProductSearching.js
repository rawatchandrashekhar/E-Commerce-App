import React, { useState, useEffect } from 'react'
import { View, Dimensions, TextInput } from 'react-native'
import Header from '../components/SharedComponents/Header'
import Search from '../components/SharedComponents/Search'
import TopProducts from '../components/dashboard/TopProducts'
import { useSelector } from 'react-redux'

const { width, height } = Dimensions.get('screen')

const ProductSearching = ({ navigation }) => {

    let fetchProductsData = useSelector(state => state?.products?.allData)
    // console.log("FETCH PRODUCTS DATA", fetchProductsData);

    const [searchTxt, setSearchTxt] = useState('')
    const [data, setData] = useState(fetchProductsData)
    const [tempData, setTempData] = useState(fetchProductsData)
    const [isRefreshing, setIsRefreshing] = useState(false)

    // console.log("SEARCHING TXT", searchTxt);

    const handleSearch = (txt) => {
        if (txt === "") {
            setData(tempData)
        } else {
            let filteredData = tempData?.filter((item, index) => {
                return item.title.toLowerCase().includes(txt.toLowerCase())
            })
            setData(filteredData)
        }
    }

    const onRefresh = React.useCallback(() => {
        setIsRefreshing(true);
        setData(tempData)
        setSearchTxt("")
        setIsRefreshing(false);
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Header handlePressRightIcon={() => alert('CART')} handlePressLeftIcon={() => navigation.goBack()} title={'Products'} leftImgWidth={20} leftImgHeight={13} rightImgWidth={25} rightImgHeight={25} leftIcon={require('../assets/images/back.png')} rightIcon={require('../assets/images/cartTwo.png')} />
            <Search handleChangeTxt={(txt) => handleSearch(txt)} searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
            <TopProducts showCartButton={false} productsData={data} isRefreshing={isRefreshing} onRefresh={onRefresh} />
        </View>
    )
}

export default ProductSearching