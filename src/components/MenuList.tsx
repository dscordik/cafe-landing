import React from 'react';
import type {MenuItem} from "../types/types.ts";
import MenuItemCard from "./MenuItemCard.tsx";

interface MenuListProps{
    dishes:MenuItem[],
    addInCorzina:(dish:MenuItem) => void
}

export const MenuList:React.FC<MenuListProps> = ({dishes, addInCorzina}) => {
    return (
        <div className="menu-list">
            {dishes.map((item) => (
                <MenuItemCard key={item.id} dish={item} addInCorzina={addInCorzina} />
            ))}
        </div>
    )
}

export default MenuList;