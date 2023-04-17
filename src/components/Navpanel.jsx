import React, { useContext, useEffect, useState } from 'react'
import data from '../data.json'
import { AppContext } from '../context'
import {RxArrowLeft, RxArrowRight, RxHamburgerMenu} from 'react-icons/rx'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Carousel from 'react-bootstrap/Carousel';
import { ThemeContext, themes } from './ThemeProvider';
import {BsMoon} from 'react-icons/bs'

export function Switcher() {

    const {theme, changeTheme} = useContext(ThemeContext)
    const [light, setLight] = useState(true)
    useEffect(() => {
        if(light){
            changeTheme('')
            console.log('asd');
        } else if(!light) {
            changeTheme('dark-content')
        }
    }, [theme, light])

    return (
        <Form>
            <Form.Check 
                onClick={e => {
                    setLight(!light)
                }}
                type="switch"
                id="custom-switch"
                className='d-flex align-items-center'
                label={<span className='fs-6 ms-3'><BsMoon /></span>}
            />
        </Form>
    );
  }

const Navpanel = () => {

    const {dataList, setSelectedBlock} = useContext(AppContext)
    const {theme, changeTheme} = useContext(ThemeContext)

    const menuNames = data ? Object.values(data).slice(1, -1).map(el => Object.values(el.at(0)).at(0)) : []

    const [currentMenuItem, setCurrentMenuItem] = useState(menuNames?.at(0))
    
    const slideLeft = (e) => {
        const index = currentMenuItem ? menuNames?.indexOf(currentMenuItem) : null
        if(index > 0 && menuNames){
            setCurrentMenuItem(menuNames.at(index - 1))
        }
    }
    
    const slideRight = (e) => {
        const index = menuNames?.indexOf(currentMenuItem)
        if(menuNames && index < menuNames.length -1){
            setCurrentMenuItem(menuNames.at(index + 1))
        }
    }

    useEffect(() => {
        currentMenuItem ? setSelectedBlock(dataList?.find(el => el ? Object.values(el?.at(0)).includes(currentMenuItem) : null)) : console.log();
    }, [currentMenuItem])

    
    return (
        <div className="navpanel w-100">
            <div className='d-flex align-items-center pt-3 pb-3'>
                <div className="container d-flex">
                    <div className="col d-flex">
                        <span className='me-3'>
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.632 20.7346H20.5572V2.58422H15.632V20.7346ZM12.9412 23.3218H23.2463V0H12.9412V23.3218Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 28.44H43.8027V25.8633H0V28.44Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.68094 38.5067H15.3421V33.5877H2.68094V38.5067ZM0 43.9998H2.68094V41.0804H18.0237V31.0117H0V43.9998Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M33.4963 2.58421V23.3215H36.1854V7.75743L41.1096 2.58626V23.3215H43.8014V0H40.0217L36.1854 4.01693V0H32.4074L25.8789 6.77882V23.3215H28.5714V7.75845L33.4963 2.58421Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M23.3268 38.5067H30.7971V33.5877H23.3268V38.5067ZM33.5942 38.5067H41.1213V33.5877H33.5942V38.5067ZM20.6445 41.0804H30.7974V43.9998H33.5942V41.0804H43.8019V31.0117H20.6445V41.0804Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.69208 7.75845L7.61525 2.58626V20.7349H2.69208V7.75845ZM7.61525 23.3215H10.3064V0H6.52802L0.000244141 6.77882V23.3215H7.61525Z" fill="currentColor"></path>
                            </svg>
                        </span>
                        <span>
                            <p className='m-0 p-0'>Демо Проект</p>
                            <p className='m-0 pb-0'>Тестовое задание</p>
                        </span>
                    </div>
                    <div className="col d-flex align-items-center justify-content-end">
                        <span className='fs-3 me-3' style={{position: 'relative'}}>
                            <DropdownButton variant='none' id="dropdown-basic-button" 
                                title={<span style={theme === 'dark-content' ? {color: 'white'} : {} }><RxHamburgerMenu/></span> }>
                                <Dropdown.Item href="https://xn--80az8a.xn--d1aqf.xn--p1ai/">Дом РФ</Dropdown.Item>
                                <Dropdown.Item href="https://xn--80az8a.xn--d1aqf.xn--p1ai/%D0%BC%D0%B5%D0%B4%D0%B8%D0%B0?tab=%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8">Дом РФ - новости</Dropdown.Item>
                                <Dropdown.Item href="https://xn--80az8a.xn--d1aqf.xn--p1ai/%D0%BE_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B5">Дом РФ - о системе</Dropdown.Item>
                            </DropdownButton>
                            

                        </span>
                        <span className='pt-2'>
                            <Switcher />
                        </span>
                    </div>
                    {/* <button type='button'
                        onClick={() => {setTheme(!theme)}}
                    >click</button> */}
                </div>
            </div>
            <hr className='m-1 p-0' />
                <div className="container d-flex justify-content-between align-items-center">
                    <span className='fs-5 pb-2 me-1' style={{cursor: 'pointer'}}
                        onClick={slideLeft}
                    >
                        <RxArrowLeft />
                    </span>
                    <p className='mb-2 text-center'>{currentMenuItem}</p>
                    <span className='fs-5 pb-2 ms-1' style={{cursor: 'pointer'}}
                        onClick={slideRight}
                    >
                        <RxArrowRight />
                    </span>
                </div>
        </div>
    )
}

export default Navpanel