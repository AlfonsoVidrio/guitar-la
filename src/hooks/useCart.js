import { useEffect, useMemo, useState } from "react"
import { db } from "../data/db"
import toast from "react-hot-toast"

export const useCart = () => {
    const initialCart = () => {
        const localStorageCart = localStorage.getItem("cart")
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)

    const MAX_ITEMS = 5
    const MIN_ITEMS = 1

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (item) => {
        const itemExists = cart.findIndex((guitar) => guitar.id == item.id)
        if (itemExists >= 0) {
            if (cart[itemExists].quantity >= MAX_ITEMS) {
                toast.error(`El límite de guitarras por modelo es ${MAX_ITEMS}`)
                return
            }
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++
            setCart(updatedCart)
            toast.success("Cantidad actualizada")
        } else {
            item.quantity = 1
            setCart([...cart, item])
            toast.success(`Producto agregado al carrito`)
        }
    }

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(guitar => guitar.id != id))
    }

    const incrementQuantity = (id) => {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            } else if (item.id === id && item.quantity === MAX_ITEMS) {
                toast.error(`El límite de guitarras por modelo es ${MAX_ITEMS}`)
            }
            return item
        })
        setCart(updatedCart)
    }

    const decrementQuantity = (id) => {
        const updatedCart = cart.map(item => {
            if (id === item.id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const isEmpty = () => cart.length === 0
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

    return {
        cart,
        data,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}