import React, {useState} from 'react';

interface OrderFormProps{
    onSubmit:() => void
}

export const OrderForm:React.FC<OrderFormProps> = ({onSubmit}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState<string | null>(null)

    function handleSubmit(e:React.FormEvent) {
        e.preventDefault()
        if (name.trim() && phone.trim()) {
            onSubmit()
            setPhone('')
            setName('')
            setError(null)
        } else {
            setError('Заполните все поля')
        }
    }

    return (
        <form className="order-form" onSubmit={handleSubmit}>
            <input
                className="order-form__input"
                placeholder="Напишите имя..."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="order-form__input"
                type="tel"
                placeholder="Напишите номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button className="btn btn--primary" type="submit">Заказать</button>
            {error && <p className="order-form__error">{error}</p>}
        </form>
    );
};

export default OrderForm;