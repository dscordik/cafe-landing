import React from 'react';
import type {Category} from "../types/types.ts";

interface MenuFilterProps{
    selectedCategory:Category | 'all' ,
    onCategoryChange:(category:Category | 'all') => void
}

export const MenuFilter:React.FC<MenuFilterProps> = ({selectedCategory, onCategoryChange}) => {

    return (
        <div className="filter">
            <button className={`filter__btn ${selectedCategory === 'all' ? 'filter__btn--active' : ''}`} onClick={() => onCategoryChange('all')}>Все меню</button>
            <button className={`filter__btn ${selectedCategory === 'starters' ? 'filter__btn--active' : ''}`} onClick={() => onCategoryChange('starters')}>Закуски</button>
            <button className={`filter__btn ${selectedCategory === 'main' ? 'filter__btn--active' : ''}`} onClick={() => onCategoryChange('main')}>Основные блюда</button>
            <button className={`filter__btn ${selectedCategory === 'dessert' ? 'filter__btn--active' : ''}`} onClick={() => onCategoryChange('dessert')}>Десерты</button>
            <button className={`filter__btn ${selectedCategory === 'drinks' ? 'filter__btn--active' : ''}`} onClick={() => onCategoryChange('drinks')}>Напитки</button>
        </div>
    );
};

export default MenuFilter;