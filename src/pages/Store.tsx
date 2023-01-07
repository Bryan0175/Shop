import {Button, Col, Row} from "react-bootstrap"
import {FaSearch} from 'react-icons/fa'
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"
import {useMemo, useState} from "react"

export function Store() {

    const [data, setData] = useState(storeItems)

    {/* Input Filter */}
    const [text, setText] = useState("");

    const filteredServices = useMemo(() => {
        return data.filter(item => (
            item.name.toLowerCase().includes(text.toLowerCase())
        ))
    },[storeItems, text]);

    const filterBrands = useMemo(()=>{
        return (itemBrand: string) => {
            const result = storeItems.filter(fil => {
                    return fil.brand === itemBrand;
             })
            setData(result)
        }
    },[])

    // @ts-ignore
    return (
        <>
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap",gap:"15px", padding:"20px"}}>
                <Button onClick={() => setData(storeItems)}>Todos</Button>
                <Button onClick={() => filterBrands("adidas")}>adidas</Button>
                <Button onClick={() => filterBrands("puma")}>puma</Button>
                <Button onClick={() => filterBrands("nike")}>nike</Button>
                <Button onClick={() => filterBrands("vans")}>vans</Button>
                <Button onClick={() => filterBrands("reebok")}>reebok</Button>
            </div>
            <div className="input-group col-auto" style={{margin:"10px 0 20px 20px"}}>
                <span className="bg-primary input-group-text" style={{color:"white"}}><FaSearch/></span>
                <div className="col-sm-3">
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Nombre del producto" aria-label="Producto" className="form-control"/>
                </div>
            </div>
            {
                text===""? (
                    <Row md={2} xs={1} lg={3} className="g-3">
                        {data.map(item => (
                            <Col key={item.id}>
                                <StoreItem {...item} />
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <Row md={2} xs={1} lg={3} className="g-3">
                        {filteredServices.map(item => (
                            <Col key={item.id}>
                                <StoreItem {...item} />
                            </Col>
                        ))}
                    </Row>
                )
            }
        </>
    )


}