import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss'

import { useSelector, useDispatch } from 'react-redux';// usado para disparar el evento
import{addTodo,} from '../../Reducers/todoSlice'
import { addGoal } from '../../Reducers/goalsSlice'; //importamos el goal donde lo tenemos guardado
import { useRef } from 'react';
import { current } from '@reduxjs/toolkit';

function FormTaskAndGoal() {
  const inputRefName = useRef();// definiendo las variables para nombrar en el formulario
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();
  const option = useSelector((state) => state.option.value);
  const dispatch=useDispatch();

  const addItem = (e) =>{// cuando damos clic add goal, envia para aca los datos del formulario  del evento on clic
    e.preventDefault();// indicamos que cuando reenderice no entre aca en el evento nuevamente
    console.log(inputRefName,current.value&&inputRefDescription.current.value&&inputRefDueDate.current.value);
      if(option==="tasks"){
        dispatch(addTodo({'name':inputRefName.current.value,'description':inputRefDescription.current.value,"dueDate":inputRefDueDate.current.value}));
      }else{
        dispatch(addGoal({'name':inputRefName.current.value,'description':inputRefDescription.current.value,"dueDate":inputRefDueDate.current.value}))
      }
    }
   // dispatch(addGoal({'name':inputRefName.current.value, 'description':inputRefDescription.current.value,
   // 'dueDate':inputRefDueDate.current.value
 // }));
 
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
      {(option==='tasks')&&
      <Button variant="info" onClick={addItem}>Add Tasks</Button>  
      }
      {(option==='goals')&&
      <Button variant='=info' onClick={addItem}>Add Goals</Button>
      }
    
    </Form>
    </div>
  );
}
export default FormTaskAndGoal;