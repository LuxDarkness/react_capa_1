import { useState } from 'react'
import PrimerComponente from './components/PrimerComponente'
import PrimerHook from './components/PrimerHook'
import PropTypeComponent from './components/PropTypeComponent'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [text, setText] = useState({
    your_name: 'Mister',
    age: 27
  })

  const change = (event) => {
    setText({
      ...text,
      [event.target.name]: event.target.value
    });
  }

  const send = (event) => {
    event.preventDefault();
    console.log(event);
    console.log('aqui');
  }

  return (
    <div className="container">
      <div className='row'>
        <div className='col-12'>
          <PropTypeComponent age={28} />
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <form onSubmit={send}>
            <label>
              Name
              <input type='Text' name='your_name' value={text.your_name} onChange={change} />
              <input type='Number' name='age' value={text.age} onChange={change} />
            </label>
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
      <div className='row'>
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/hooked'>Hook</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path='/'>
          <PrimerComponente />
        </Route>
        <Route path='/hooked'>
          <PrimerHook />
        </Route>
        <Route>
          Aqu&iacute; no hay nada, regrese...
        </Route>
      </Switch>
    </div>
  );
}

export default App;
