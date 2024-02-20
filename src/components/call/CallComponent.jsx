import React from 'react'
import { useForm } from "react-hook-form"
import { createCall } from '../../api/api'
export default function CallComponent() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        try {
            const response = await createCall(data)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='Call__body-items'>
            <div className="Call__item-text">
                <div>
                    <div className="Call__text-subtitle">
                        <h1>Заказать обратный звонок</h1>
                    </div>
                    <div className="Call__text-title">
                        <h2>
                            Наш сотрудник перезвонит вам в ближайшее время.
                        </h2>
                    </div>
                </div>
                <div className='Call__text-form'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form__inputs'>
                            <input placeholder="Телефон" {...register("Телефон")} required className='form__input form__input-mobile' />
                            <input placeholder="Имя" {...register("Имя")} required className='form__input form__input-name' />
                        </div>
                        <div className="form__input-submit">
                            <input type="submit" value='Заказать звонок' />
                        </div>
                    </form>
                </div>
            </div>
            <div className="Call__item-svg">
                <img src="/source/image/call.svg" alt="" />
            </div>
        </div>
    )
}
