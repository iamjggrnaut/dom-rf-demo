import React, { createContext, useState, useEffect } from 'react'
import data from './data.json'

export const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [theme, setTheme] = useState(true)

    const dataList = data ? Object.values(data).slice(1, -1) : []
    const period =  Object.values(dataList?.at(0).at(2)).slice(1)
    const regions =  dataList?.at(0).slice(3, 97).map(el => Object.values(el).at(0))


    const sortData = (period, item) => {
        // this function prepares an array of objects to apss it to a chart for visualizing the data
        const array = []
        if(period && item){
            for(let i in period){
                array.push({
                    date: period[i],
                    value: item[i]
                })
            }
        }
        return array
    }
     // current block of data selected from menu (array)
    const [selectedBlock, setSelectedBlock] = useState(dataList?.at(0))
    // current region selected from a dropdown menu (string)
    const [selectedRegion, setSelectedRegion] = useState()

    //  region name and values for evey date value
    const [subData, setSubData] = useState()
    useEffect(() => {
        if(selectedBlock && selectedRegion){
        const target = selectedBlock?.find(el => el ? Object.values(el).includes(selectedRegion) : null)
        const values = target ? Object.values(target).slice(1) : null
        target && selectedRegion ? setSubData(sortData(period, values)) : setSubData()
        }
    }, [selectedRegion, selectedBlock])

    const contextData = {
        setTheme,
        theme,    
        selectedBlock,
        setSelectedBlock,
        selectedRegion,
        setSelectedRegion,
        subData,
        setSubData,
        regions,
        period,
        dataList
    }

    return (
        <AppContext.Provider value={contextData}>
            {children}
        </AppContext.Provider>
    )
}