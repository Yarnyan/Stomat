import React, { useEffect, useState } from 'react'
import ServicesComponent from '../../components/services/ServicesComponent'
import { Services } from '../../data/data'
export default function ServicesModule() {
    const [services, setServices] = useState([])
    console.log(services)
    useEffect(() => {
        setServices(Services)
    }, []);
    return (
        <div className='Services'>
            <div className="Services__body">
                <div className="Services__body-subtitle">
                    <h1>Услуги</h1>
                </div>
                <div className="Services__body-items">
                    {services.map((service, index) =>{
                        return (
                            <ServicesComponent image={service.img} key={index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
