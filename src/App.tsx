
import { GuitarItem } from "./components/GuitarItem"
import { Header } from "./components/Header"
import { Toaster } from "react-hot-toast"
import { useCart } from "./hooks/useCart"


export const App = () => {

  const { cart, data, addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart, isEmpty, cartTotal } = useCart()

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => <GuitarItem
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