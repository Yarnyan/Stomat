import React from 'react'
import { Link } from 'react-router-dom'
export default function FooterModule() {
  return (
    <div className='Footer'>
        <div className="Footer__body">
            <a href="https://vk.com/public166584336" target='_blank'>
                <img src="/source/image/socials.svg" alt="" />
            </a>
            <div className="Footer__body-items">
              <Link to="/license">
                <p>Лицензия на осуществление медицинской помощи</p>
              </Link>
            </div>
        </div>
    </div>
  )
}
