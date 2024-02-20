import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderPriceComponent() {
    return (
        <div className="Header">
            <div className="Header__body">
                <div className='Header__body-items'>
                    <div className="Header__items-logo">
                        <img src="../../../source/image/logo.svg" alt="" />
                    </div>
                    <div className="Header__items-navigation">
                        <nav>
                            <ul className='Header__navigation-items' style={{width: '100%'}}>
                                <li className='Navigation__item'>
                                    <Link to="/Stomatologia_1">На главную</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
