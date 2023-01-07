import { Carousel } from "react-bootstrap"
import bg1 from "/imgs/bg1.jpg"
import bg2 from "/imgs/bg2.jpg"
import bg3 from "/imgs/bg3.jpg"

import "../styles/styles.css"

export function Home() {
  return (
      <>
      <Carousel style={{marginTop:"4rem"}} fade>
          <Carousel.Item>
              <img
                  className="d-block h-auto w-100"
                  src={bg1}
                  alt="First slide"
              />
              <Carousel.Caption>
                  <h3>SHOES IV</h3>
                  <p>Nuestros precios no mienten, recuerden que las unicas que mienten son las mujeres.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="d-block h-auto w-100"
                  src={bg2}
                  alt="Second slide"
              />

              <Carousel.Caption>
                  <h3>SHOES IV</h3>
                  <p>Zapatos que te hacen sentir que puedes conquistar el mundo.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="d-block h-auto w-100"
                  src={bg3}
                  alt="Third slide"
              />

              <Carousel.Caption>
                  <h3>SHOES IV</h3>
                  <p>Los pies son importantes, y nuestros zapatos lo saben.</p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
            <div className="contentHome">
                <h1>SHOES IV</h1>
                <p>Es un emprendimiento que aspira llegar a todos los nuestros usuarios a nivel internacionales,
                    tenemos una gran cantidad de productos de alta calidad, tenemos unos precios bastante accesibles
                    para todo nuestro publico. Por el momento solo hacemos pedidos en Colombia, pero dentro de poco
                    tendremos envíos a todo nivel nacional.<br/><br/>
                <strong>¿Entonces que esperas para adquirir los tuyos?</strong></p>
            </div>
    </>
  )
}
