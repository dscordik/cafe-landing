export type Category = 'starters' | 'main' | 'dessert' | 'drinks'

export interface MenuItem{
    id:number,
    productName:string,
    description:string,
    price:number,
    category:Category,
    productImg:string
}

export interface CartItem{
    dish:MenuItem,
    quantity:number
}