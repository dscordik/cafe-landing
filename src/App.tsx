import './App.css'
import Hero from "./components/Hero.tsx";
import MenuList from "./components/MenuList.tsx";
import {menu} from "./data/menu.ts";
import MenuFilter from "./components/MenuFilter.tsx";
import {useState} from "react";
import type {CartItem, Category, MenuItem} from "./types/types.ts";
import Cart from "./components/Cart.tsx";
import OrderForm from "./components/OrderForm.tsx";

function App() {
    const [orderSent, setOrderSent] = useState<boolean>(false)
    const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all')
    const [cart, setCart] = useState<CartItem[]>([])
    const catDishes = selectedCategory === 'all' ? menu : menu.filter((item) => item.category === selectedCategory)

    function addInCorzina(dish:MenuItem) {
        setOrderSent(false)
        const oneCart = cart.find((item) => item.dish.id === dish.id)
        if (oneCart) {
            setCart(prevState => prevState.map((item) => {
                if (item.dish.id===dish.id){
                    return {...item, quantity:item.quantity + 1}
                } else {
                    return item
                }
            }))
        } else {
            setCart(prevState => [...prevState, { dish, quantity: 1 }])
        }
    }

    function onCategories(category:Category | 'all') {
        setSelectedCategory(category)
    }

    function addCount(id:number) {
        setCart(prevState => prevState.map((item) => {
            if (item.dish.id === id) {
                return {...item,  quantity:item.quantity + 1}
            } else {
                return item
            }
        }))
    }

    function minusCount(id:number) {
        const oneCart = cart.find((item) => item.dish.id === id)
        if (oneCart?.quantity === 1) {
            deleteDish(id)
        } else {
            setCart(prevState => prevState.map((item) => {
                if (item.dish.id === id) {
                    return {...item, quantity: item.quantity - 1}
                }
                return item
            }))
        }
    }

    function deleteDish(id:number) {
        setCart(prevState => prevState.filter((item) => item.dish.id !== id))
    }

    function handleOrder() {
        setOrderSent(true)
        setCart([])
    }

    return (
        <div className="app">
            <Hero />
            <MenuFilter onCategoryChange={onCategories} selectedCategory={selectedCategory} />
            <MenuList dishes={catDishes} addInCorzina={addInCorzina} />
            <section className="cart-section">
                <h2 className="section-title">Корзина</h2>
                <Cart addCount={addCount} minusCount={minusCount} corzina={cart} deleteDish={deleteDish} />
            </section>
            <section className="order-section">
                <h2 className="section-title">Оформить заказ</h2>
                <OrderForm onSubmit={handleOrder} />
                {orderSent && <p className="order-success">Заказ успешно оформлен!</p>}
            </section>
        </div>
    )
}

export default App