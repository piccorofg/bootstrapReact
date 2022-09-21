import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
   <div class="App">
    <h1>React Bootstrap</h1>
    <Button variant="primary" onClick={() => console.log('Hola')}>Primary</Button>
   </div>
  );
}

export default App;
