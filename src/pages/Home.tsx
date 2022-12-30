import {Image} from "react-bootstrap";
import bg from "../../public/imgs/bg.jpg"

export function Home() {
  return (
      <div>
        <h1>Home</h1>
          <Image src={bg} width={1300} height={600} alt="background" title="background" style={{marginTop: 50,marginBottom: 50}}/>
        <p><strong>ROPAYA</strong>, es un emprendimiento que aspira llegar a todos los corazones. Tenemos una amplia variedad de productos con una excelente calidad y lo mejor ¡Son realizados 100% a mano!
          Puedes adquirir productos, para ti, para regalar o incluso para tu mascota.
          No dudes en comprar la amplia variedad de productos con una excelente calidad y lo mejor ¡Son realizados 100% a mano!
          ¡Pide ahora!</p>
      </div>
  )
}
