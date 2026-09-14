import React from 'react';
import type {CartItem} from "../types/types.ts";

interface CartProps{
    corzina:CartItem[],
    deleteDish:(id:number) => void,
    addCount:(id:number) => void,
    minusCount:(id:number) => void
}

export const Cart:React.FC<CartProps> = ({corzina, deleteDish, addCount, minusCount}) => {

    return (
        <div>
            {corzina.length === 0 ? (<div>
                <p className="cart-empty">Корзина пуста, добавьте что-то, чтобы оно отобразилось...</p>
            </div>) : (
                <div className="cart">
                    {corzina.map((item) => (
                        <div className="cart__row" key={item.dish.id}>
                            <span className="cart__name">{item.dish.productName}</span>
                            <span className="cart__calc">{item.dish.price} ₽ × {item.quantity} = {item.dish.price * item.quantity} ₽</span>
                            <div className="cart__controls">
                                <button className="btn btn--round" onClick={() => minusCount(item.dish.id)}>−</button>
                                <span className="cart__qty">{item.quantity}</span>
                                <button className="btn btn--round" onClick={() => addCount(item.dish.id)}>+</button>
                                <button className="btn btn--danger" onClick={() => deleteDish(item.dish.id)}>Удалить</button>
                            </div>
                        </div>
                    ))}
                    <p className="cart__total">Итоговая сумма: {corzina.reduce((acc,item) => acc + item.dish.price * item.quantity, 0)} ₽</p>
                </div>)}
        </div>
    );
};

export default Cart;