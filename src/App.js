import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.components";

export default function App() {
  const [monster, setMonster] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filterMonster, setFilterMonster] = useState(monster);

  const getMonster = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setMonster(json));
  };

  useEffect(() => {
    getMonster();
  }, []);

  useEffect(() => {
    const newFilterData = monster.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonster(newFilterData);
  }, [monster, searchField]);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        className="monster-serach-box"
        placeholder="search monster..."
      />
      {filterMonster.length > 0 ? (
        <CardList filteredData={filterMonster} />
      ) : (
        <p className="white-text">No data found</p>
      )}
    </div>
  );
}
