import logo from './logo.svg';
import './App.scss';
import Item from './Components/Item/Item';
import Menu from './Components/Menu/Menu';
import Formulario from './Components/Formulario/Formulario';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddingMobileButton from './Components/AddingMobileButton/AddingMobileButton';
import { useSelector } from 'react-redux'; //Para acceder s los estados

function App() {
  const goals = useSelector((state)=>state.goals.value); // variable para usar selector, indicando usar goals del reducers y value
  const tareas = [{
    name:'Terminar Proyecto PW',
    description:'Terminar todo lo asignado',
    dueDate:'12/12/2024'
  },{
    name:'Entregar Reporte Ingles',
    description:'Examen pendiente parcial',
    dueDate:'15/12/2024'
  },{
    name:'Examen final Proyecto',
    description:'Estudiar todo el contenidos de las 6 unidades, junto a material de apoyo y proyectos realizados en clases',
    dueDate:'18/12/2024'
  }]
  return (  
    <div className="App">
       <Menu/>
       <Container>
      <Row>
        <Col xs={0} md={0} className='d-none d-sm-block d-sm-none d-md-block'><Formulario/></Col>
        <Col xs={0} sm={0}>
          <Row className='d-md-none'>
            <div className='bg-transparent overlapping-div'>
              <AddingMobileButton className='float.left'/>
            </div>
          </Row>
          <Row>
            <div className='scrolling'>
             {goals.map((tarea,index)=>(// aca recorremos el goals en vez de un listado predefinido para imprimir en pantalla
                <Item key={index} name={tarea.name} description={tarea.description} dueDate={tarea.dueDate}/>
             ))}
          </div>
        </Row>
        </Col>
      </Row>
    </Container>      
    </div>
  );
}

export default App;
