import {Container, Row, Col, Button} from 'reactstrap';
const CartItem = ({id, title, price, image, amount}) => {
    return (
        <Container>
            <Row className='border' md="3" sm="2" xs="1">
                <Col className="CardBody mt-3">
                <img style={{width:188}} src={image}  alt={title}/>
                </Col>
                <Col className="CardBody mt-4">
                <h2> {title} </h2>
                <h5> $ {price} </h5>
                <Button color="primary"> remove </Button>
                </Col>
                <Col className="CardBody mt-3">
                <Button color="primary"> + </Button>
                  <h2> {amount}</h2>
                <Button color="primary"> - </Button>
                </Col>
           </Row>
      </Container>
    )
}

export default CartItem;