import React from 'react'
import { useForm } from "react-hook-form"
export default function CallComponent() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div className='Call__body-items'>
            <div className="Call__item-text">
                <div className="Call__text-subtitle">
                    <h1>Заказать обратный звонок</h1>
                </div>
                <div className="Call__text-title">
                    <h2>
                        Наш сотрудник перезвонит вам в ближайшее время.
                    </h2>
                </div>
                <div className='Call__text-form'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input placeholder="Телефон" {...register("example")} required className='form__input form__input-mobile'/>
                            <input placeholder="Имя" {...register("example")} required className='form__input form__input-name'/>
                        </div>
                        <div className="form__input-submit">
                            <input type="submit" />
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
