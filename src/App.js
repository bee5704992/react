
import './App.css';
import Slider from './Slider';
import Todo from './Todo';
import {Switch,Route,Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <button><Link to="/todo">todo App</Link></button>
      <button><Link to="/">carousel</Link></button>
      
      <Switch>

      <Route exact path ="/">
      <Slider />
      </Route>

      <Route path="/todo">
        <Todo />
      </Route>

      </Switch>
       
    </div>
  );
}

export default App;
