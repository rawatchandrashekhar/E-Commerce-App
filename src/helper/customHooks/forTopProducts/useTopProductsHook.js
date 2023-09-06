import { useIsFocused } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const useTopProductsHook = (id) => {

    let focus = useIsFocused();

    const [getValue, setValue] = useState(0)
    const [selected, setSelected] = useState(false)
    let fetchProducts = useSelector(state => state?.cart?.addToCartData)
    let fetchFavProducts = useSelector(state => state?.favourite?.addToFavouriteData)
    
    useEffect(() => {
        let fp = fetchProducts?.filter((i, ind) => {
            if (id === i.id) {
                console.log("i?.qtyValue", i?.qtyValue);
                setValue(i?.qtyValue)
                return i
            }
        })
        if (fp == "") {
            setValue(0)
        }
    }, [focus])

    useEffect(() => {
        fetchFavProducts?.filter((i, ind) => {
            if (id === i.id)
                setSelected(!selected)
        })
    }, [focus])

    return [getValue,setValue,selected,setSelected]

}

export default useTopProductsHook