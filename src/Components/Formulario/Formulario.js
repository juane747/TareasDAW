import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss'

function Formulario() {
  return (
  <div className='space'>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
        <Form.Label>Name</Form.Label>
        <Form.Control type="txt" placeholder="" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlImput1">
        <Form.Label>Due Dat</Form.Label>
        <Form.Control type="date" placeholder="name@example.com"/>
      </Form.Group>
      <Button variant="info">Add Goal</Button>  
    </Form>
    </div>
  );
}

export default Formulario;