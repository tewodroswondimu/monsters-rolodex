import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: 'Frankestein'}, 
        { name: 'Drakula'}, 
        { name: 'Zombie'}
      ]
    }
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome { this.state.name } <br/>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={() => this.setState({ name: 'Tewodros Wondimu'})}>Show Full Name</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
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
