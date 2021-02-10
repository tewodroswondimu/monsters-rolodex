import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [], 
      searchField: '' // meant for storing our search parameter
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    return(
      <div className="App">
        <input type='search' placeholder='search monsters' onChange={
          e => this.setState({ searchField: e.target.value })
        }/>
        <CardList monsters={this.state.monsters} />
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
