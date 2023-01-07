import { Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import VanillaTilt from 'vanilla-tilt';
import "../styles/card.css";

type StoreItemProps = {
  id: number
  name: string
  brand: string
  price: number
  imgUrl: string
}

export function StoreItem({ id, name, price, brand, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)
  // @ts-ignore
  VanillaTilt.init(document.querySelectorAll(".box"),
      {
        max:25,
        speed:400
      })
  return (
      <>
        <div className="container1">
          <div className="box" data-text={brand}>
            <h5 className="name">{name}</h5>
            <h6 className="price">{formatCurrency(price)}</h6>
            {quantity === 0 ? (
            <a className="buy"  onClick={() => increaseCartQuantity(id)}>+ Agregar</a>
            ) : (
                <div
                    className="d-flex align-items-center flex-column cart"
                    style={{ gap: ".5rem" }}
                >
                  <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ gap: ".5rem" }}
                  >
                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                    <div>
                      <span className="fs-3 m-3">{quantity}</span>
                    </div>
                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                  </div>
                  <Button
                      onClick={() => removeFromCart(id)}
                      variant="danger"
                      size="sm"
                  >
                    Cancelar
                  </Button>
                </div>
            )}
            <div className="circle"></div>
            <img src={imgUrl} className="product"/>
          </div>
        </div>
      </>
  )
}
