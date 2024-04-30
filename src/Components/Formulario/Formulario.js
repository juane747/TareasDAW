import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss'
import { useDispatch } from 'react-redux';// usado para disparar el evento
import { addGoal } from '../../Reducers/goalsSlice';
import { useRef } from 'react';

function Formulario(props) {
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();

  const dispatch=useDispatch();
  const addItem = (e) =>{// cuando damos clic add goal, envia para aca los datos del formulario 
    e.preventDefault();
    dispatch(addGoal({'name':inputRefName.current.value, 'description':inputRefDescription.current.value,
    'dueDate':inputRefDueDate.current.value
  }));
  }
  return (
  <div className='space'> 
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
        <Form.Label>Name</Form.Label>
        <Form.Control type="txt" placeholder="" ref={inputRefName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} ref={inputRefDescription}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlImput1">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" placeholder="name@example.com" ref={inputRefDueDate}/>
      </Form.Group>
      <Button variant="info" onClick={addItem}>Add Goal</Button>  
    </Form>
    </div>
  );
}
export default Formulario;