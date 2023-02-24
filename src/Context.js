import React, {createContext, useState, useEffect} from "react";
import axios from "axios";
import {useDebounce} from "./hooks/useDebounce";

export const CustomContext = createContext()

export const Context = (props) => {

    const [products, setProducts] = useState([])

    const [searchData, setSearchData] = useState([])

    const [searchVal, setSearchVal] = useState("")

    const debouncedSearchVal = useDebounce(searchVal, 1000)

    useEffect(() => {
        axios('http://localhost:8080/products').then(({data}) => setProducts(data))
    }, [])

    useEffect(() => {
        searchVal && axios(`http://localhost:8080/products?title_like=${searchVal}`).then(({data}) => setSearchData(data))
    }, [debouncedSearchVal])

    const minusProduct = (id) => {
        setProducts(products.map(item => {
            if (item.id === id) {
                return {...item, count: item.count - 1}
            }
            return item
        }))
    }

    const plusProduct = (id) => {
        setProducts(products.map(item => {
            if (item.id === id) {
                return {...item, count: item.count + 1}
            }
            return item
        }))
    }

    const deleteProduct = (id) => {
        setProducts(products.filter(item => {
            return item.id !== id
        }))
    }

    const value = {
        setSearchVal,
        products,
        searchData,
        setProducts,
        minusProduct,
        plusProduct,
        deleteProduct
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}