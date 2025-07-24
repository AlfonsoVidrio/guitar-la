import { useEffect, useState } from "react"
import { Guitar } from "./components/Guitar"
import { Header } from "./components/Header"
import { db } from "./data/db"
import toast, { Toaster } from "react-hot-toast"


export const App = () => {

  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart")
    return localStorageCart  ? JSON.parse(localStorageCart) : []
  }

  const [data] = useState(db)
  const [cart, setCart] = useState(initialCart)

  const MAX_ITEMS = 5
  const MIN_ITEMS = 1

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  },[cart])

  const addToCart =(item) => {
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
    const updatedCart = cart.map( item => {
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
    const updatedCart = cart.map( item => {
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

  return (
    <>
      <Header 
        cart={cart} 
        removeFromCart={removeFromCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        clearCart={clearCart}
        />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => <Guitar 
          guitar={guitar} 
          key={guitar.id} 
          addToCart={addToCart}
          />)}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
      <div className="toast-container">
        <Toaster />
      </div>
    </>
  )
}