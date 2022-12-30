import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"
import {useMemo, useState} from "react";

export function Store() {

    const [text, setText] = useState("");

    const filteredServices = useMemo(() => {
        return storeItems.filter(item => (
            item.name.toLowerCase().includes(text.toLowerCase())
        ))
    },[storeItems, text]);

  return (
    <>
      <h1>Tienda</h1>
        <input placeholder="¿Qué producto buscas?"
               type="text"
               value={text}
               onChange={(e) => setText(e.target.value)}
               style={{margin:10, borderRadius: 5, padding: 10}}
               autoFocus={true}/>
      <Row md={2} xs={1} lg={3} className="g-3">
        {filteredServices.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
