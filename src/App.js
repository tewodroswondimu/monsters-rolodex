import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(props) {
    super(props);

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

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state; // deconstructs the state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
      <div className="App">
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} />
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
