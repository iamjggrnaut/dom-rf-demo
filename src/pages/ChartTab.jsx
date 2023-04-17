import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context'
import { Link } from 'react-router-dom'
import { RxArrowDown, RxArrowUp } from 'react-icons/rx'
import RenderTable from '../components/RenderTable'
import RenderAreaChart from '../components/RenderAreaChart'

const ChartTab = ({type}) => {

    const {subData, selectedRegion, selectedBlock} = useContext(AppContext)

    const [state, update] = useState(true)
    const updater = () => {update(!state)}

    const renderData = () => {
        switch(type){
            case 'table': 
                return(
                    <RenderTable update={updater} state={state}/>
                )
            case 'chart':
                return(
                    <RenderAreaChart />
                )
        }
    }

    return (
        selectedRegion && 
        <div className='p-4' style={{boxShadow: '0 1px 4px silver', borderRadius: '8px', padding: '16px 8px'}}>
            {subData && renderData()}
        </div>
    )
}

export default ChartTab