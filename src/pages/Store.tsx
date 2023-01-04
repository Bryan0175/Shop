import {Button, Col, Dropdown, Row} from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"
import {useMemo, useState} from "react";

export function Store() {

    const [data, setData] = useState(storeItems)
    // const [text, setText] = useState("");

    // const filteredServices = useMemo(() => {
    //     return data.filter(item => (
    //         item.name.toLowerCase().includes(text.toLowerCase())
    //     ))
    // },[storeItems, text]);

    // const filters = (itemBrand: string) => {
    //   const result = data.filter(item => (
    //       text ? item.name.toLowerCase().includes(text.toLowerCase()) : item.brand === itemBrand
    //   ))
    //     setData(result)
    // }

    const filterBrands = (itemBrand: string) => {
        const result = storeItems.filter(fil => {
            return fil.brand === itemBrand;
        })
        setData(result)
    }

    return (
        <>

            <Dropdown className="d-inline" autoClose="outside">
                <Dropdown.Toggle id="dropdown-autoclose-outside" className="mb-4 mt-3">
                    Selecionar Marca
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setData(storeItems)}>Todos</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => filterBrands("adidas")}>Adidas</Dropdown.Item>
                    <Dropdown.Item onClick={() => filterBrands("puma")}>Puma</Dropdown.Item>
                    <Dropdown.Item onClick={() => filterBrands("nike")}>Nike</Dropdown.Item>
                    <Dropdown.Item onClick={() => filterBrands("vans")}>Vans</Dropdown.Item>
                    <Dropdown.Item onClick={() => filterBrands("reebok")}>Reebok</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/*<input placeholder="¿Qué producto buscas?"*/}
            {/*       type="text"*/}
            {/*       value={text}*/}
            {/*       onChange={(e) => setText(e.target.value)}*/}
            {/*       style={{margin:10, borderRadius: 5, padding: 10}}*/}
            {/*       autoFocus={true}/>*/}
            <Row md={2} xs={1} lg={3} className="g-3">
                {data.map(item => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}
