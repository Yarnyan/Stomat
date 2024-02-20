import React from 'react'
import { Link } from 'react-router-dom'
export default function HeaderComponent() {
    return (
        <div className='Header__body-items'>
            <div className="Header__items-logo">
                <img src="../../../source/image/logo.svg" alt="" />
            </div>
            <div className="Header__items-navigation">
                <nav>
                    <ul className='Header__navigation-items'>
                        <li className='Navigation__item hide'>
                            <a href="#employees">Специалисты</a>
                        </li>
                        <li className='Navigation__item hide'>
                            <a href='#services'>Услуги</a>
                        </li>
                        <li className='Navigation__item hide'>
                            <a href='#testimonials'>Отзывы</a></li>
                        <li className='Navigation__item'>
                            <a href='#map'>Где нас найти?</a>
                        </li>
                        <li className='Navigation__item'>
                            <Link to='/Stomatologia_1/price'>Цены</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='Header__navigation-button hide'>
                <a href="#call">
                    Заказать звонок
                </a>
            </div>
        </div>
    )
}
