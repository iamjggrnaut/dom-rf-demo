import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context'
import { Link } from 'react-router-dom'
import { RxArrowDown, RxArrowUp } from 'react-icons/rx'

const RenderTable = ({update, state}) => {

    const {selectedRegion, subData, setSubData} = useContext(AppContext)
    const [asc, setAsc] = useState(false)

    useEffect(() => {
        if(asc && subData){
            setSubData(subData?.sort(function(a, b){
                let dateA = new Date(a.date)
                let dateB = new Date(b.date)
                return dateA - dateB
            }))
        } 
        if(!asc && subData){
            setSubData(subData?.sort(function(a, b){
                let dateA = new Date(a.date)
                let dateB = new Date(b.date)
                return dateB - dateA
            }))
        }
    }, [asc, state, subData])

    return(
        selectedRegion && 
        <div>
            <div className='mb-3 d-flex align-items-center justify-content-between'>
                <h5>{selectedRegion}</h5>
                <div className='d-flex align-items-center'>
                    Сортировать
                    <span className='ps-3 pe-3'>
                        <Link 
                            className='d-flex align-items-center' 
                            style={{textDecoration: 'none'}} to={'#'}
                            onClick={e => {
                                setAsc(!asc)
                                update()
                            }}
                        >
                            Дата {!asc ? <RxArrowDown/> : <RxArrowUp />}
                        </Link>
                    </span>
                </div>
            </div>

            <table>
                <thead>
                    <tr >
                        <th className='col'>Дата</th>
                        <th className='col ps-4'>Количество</th>
                    </tr>
                </thead>
                <tbody>
                    {subData && subData.map((el, i) => (
                        <tr  key={i} style={{borderBottom: '1px solid silver'}}>
                            <td className='col'>{new Date(el.date).toLocaleDateString('ru')}</td>
                            <td className='col ps-4'>{el.value}</td>
                        </tr>
                    ))}   
                </tbody>
            </table>
        </div>
    )
}

export default RenderTable