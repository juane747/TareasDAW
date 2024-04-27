import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss'
import { CardBody } from 'react-bootstrap';
function Item() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Proyecto del Curso de Desarrollo Web</Card.Title>
          <Card.Text className='fw-bold'>
            Descripcion
          </Card.Text>
          <Card.Text>
            Elaborar una aplicacion web responsive en la que se pueda llenar el control de mis tareas
          </Card.Text>
          <Card.Text className='fw-bold'>
            Due Date
          </Card.Text>
          <Card.Text>
            31/05/2024
          </Card.Text>
      </Card.Body>
        <Card.Body>    
          <Button variant="info">Editar</Button>
          <Button varian="info">Eliminar</Button>
      </Card.Body>
    </Card>
  );
}
export default Item;