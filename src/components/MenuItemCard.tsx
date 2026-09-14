import React from 'react';
import type { MenuItem } from "../types/types.ts";

interface MenuItemCardProps {
    dish: MenuItem,
    addInCorzina: (dish: MenuItem) => void
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ dish, addInCorzina }) => {
    return (
        <article className="menu-card">
            <img className="menu-card__img" src={dish.productImg} alt={dish.productName} />
            <h3 className="menu-card__title">{dish.productName}</h3>
            <p className="menu-card__desc">{dish.description}</p>
            <div className="menu-card__footer">
                <span className="menu-card__price">{dish.price} ₽</span>
                <button className="btn btn--primary" onClick={() => addInCorzina(dish)}>
                    В корзину
                </button>
            </div>
        </article>
    );
};

export default MenuItemCard;