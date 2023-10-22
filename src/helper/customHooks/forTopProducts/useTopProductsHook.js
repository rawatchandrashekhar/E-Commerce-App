import { useIsFocused } from '@react-navigation/native'
import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCartData, removeCartData } from '../../../storage/redux/slices/AddToCartSlice';
import { addFavData, removeFavData } from '../../../storage/redux/slices/AddToFavouriteSlice';
import { AlertSuccess } from '../../../components/SharedComponents/Alert';

const useTopProductsHook = (item) => {

    let focus = useIsFocused();
    let dispatch = useDispatch();

    const [getValue, setValue] = useState(0)
    const [selected, setSelected] = useState(false)
    let fetchProducts = useSelector(state => state?.cart?.addToCartData)
    let fetchFavProducts = useSelector(state => state?.favourite?.addToFavouriteData)

    useEffect(() => {
        let fp = fetchProducts?.filter((i, ind) => {
            if (item.id === i.id) {
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
            if (item.id === i.id)
                setSelected(!selected)
        })
    }, [focus])

    const handleAddToCart = useCallback(
        (value) => {
            if (value > 0)
                dispatch(addCartData({ ...item, qtyValue: value }))
            else
                dispatch(removeCartData(item))
        },
        [getValue],
    )

    const handleChange = useCallback(
        (value) => {
            if (value) {
                dispatch(addFavData(item));
                AlertSuccess('Added Item to FAVOURITE!');
            } else {
                dispatch(removeFavData(item));
                AlertSuccess('Removed Item from FAVOURITE!');
            }
        },
        [selected],
    )

    return [getValue, setValue, selected, setSelected, handleAddToCart, handleChange]

}

export default useTopProductsHook