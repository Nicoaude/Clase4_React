import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./assets/placa-1.png" />
      <Card.Body>
        <Card.Title>Placa de video</Card.Title>
        <Card.Text>
          <span style={{fontSize:"1rem"}}>NVIDIA 3070TI</span>
          <span style={{color:"green", fontSize:"1.4rem", margin:"1rem"}}>Precio: $1200</span>
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    )
}

export default Product;