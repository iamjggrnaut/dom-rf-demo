import React, { useContext } from 'react'
import data from '../data.json'
import { useState, useEffect } from 'react'
import { AppContext } from '../context'
import ChartTab from './ChartTab'

const Main = () => {

    const {regions, subData, setSelectedRegion} = useContext(AppContext)
    const [type, setType] = useState('chart')

    return (
        <div className='container'>

            <div className="row mt-4" style={{boxShadow: '0 1px 4px silver', borderRadius: '8px', padding: '16px 8px'}}>
                <div className="col-6 d-flex align-items-center">
                    <label className='me-3' htmlFor="">Регион</label>
                    <select className='form-control' name="" id="" onChange={e => setSelectedRegion(e.target.value)}>
                        <option value="">Выберите регион</option>
                        {
                            regions?.map((option, i) => (
                                <option key={i} value={option}>{option}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-6 d-flex align-items-center">
                    <label className='me-3' htmlFor="">Формат</label>
                    <select className='form-control' name="" id="" onChange={e => setType(e.target.value)}>
                        <option value="chart">График</option>
                        <option value="table">Таблица</option>
                    </select>
                </div>
            </div>

            <div className="row mt-4 mb-5">
                <ChartTab data={subData} type={type} />
            </div>

            {/* {console.log(subData)} */}

        </div>
    )
}

export default Main