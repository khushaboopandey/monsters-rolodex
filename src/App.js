import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.components";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>
        this.setState(() => {
          return { monster: json };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monster, searchField } = this.state;
    const { onSearchChange } = this;
    console.log("render from app");
    const filteredData = monster.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onSearchChange={onSearchChange}
          className="monster-serach-box"
          placeholder="search monster..."
        />
        <CardList filteredData={filteredData} />
      </div>
    );
  }
}

export default App;
