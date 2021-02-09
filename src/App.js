import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: 'Frankestein', id: '01'}, 
        { name: 'Drakula', id: '02'}, 
        { name: 'Zombie', id: '03'}
      ]
    }
  }

  render() {
    return(
      <div className="App">
        {
          this.state.monsters.map(monster => 
            <h1 key={monster.id}>
              {monster.name}
            </h1>
          )
        }
      </div>
    );
  }
}

/* opted to use class instead of function
function App() {
  return (
    
  );
}
*/

export default App;
