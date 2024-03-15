import React, {useEffect} from 'react'

export default function PriceModule() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className='Price'>
        <div className="Price__body">
            <img src="/source/image/price1.jpg" alt="" />
            <img src="/source/image/price2.jpg" alt="" />
            <img src="/source/image/price3.jpg" alt="" />
            <img src="/source/image/price4.jpg" alt="" />
        </div>
    </div>
  )
}
