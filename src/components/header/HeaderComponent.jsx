import React from 'react'
export default function HeaderComponent() {
    return (
        <div className='Header__body-items'>
            <div className="Header__items-logo">
                <img src="/source/image/logo.svg" alt="" />
            </div>
            <div className="Header__items-navigation">
                <nav>
                    <ul className='Header__navigation-items'>
                        <li className='Navigation__item hide'>Специалисты</li>
                        <li className='Navigation__item hide'>Услуги</li>
                        <li className='Navigation__item hide'>Отзывы</li>
                        <li className='Navigation__item'>Где нас найти?</li>
                        <li className='Navigation__item'>Цены</li>
                    </ul>
                </nav>
            </div>
            <div className='Header__navigation-button hide'>
                <a href="#">
                    Заказать звонок
                </a>
            </div>
        </div>
    )
}
