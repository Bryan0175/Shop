import {Button, Offcanvas, Stack} from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import {FaWhatsapp} from 'react-icons/fa';
import storeItems from "../data/items.json"
import {useEffect, useState} from "react";
import ReactWhatsapp from "react-whatsapp";

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()
  // @ts-ignore
  const [message, setMessage] = useState("");

  useEffect(()=>{
      const result = cartItems.map(fil => {
        // @ts-ignore
        const item = storeItems.find(i => i.id === fil.id)
        const total = formatCurrency((item?.price || 0) * fil.quantity)
        // @ts-ignore
        return `${fil.quantity} - ${item.name}: ${total}`
      })
    // @ts-ignore
    setMessage(result)
  },[])

    return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Productos</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
            <ReactWhatsapp
                number="57-322-421-3066"
                message={"Buenas noches me gustaria comprar estos zapatos: "+message}
                element="button"
                style={{borderRadius: "5px", borderColor:"#0d6efd", backgroundColor: "#0d6efd", color: "white", padding: "15px 0", fontSize:"19px"}}
            >Realizar pedido<FaWhatsapp style={{marginLeft: "10px"}}/>
            </ReactWhatsapp>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
