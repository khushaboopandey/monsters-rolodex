import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.components";

export default function App() {
  const [monster, setMonster] = useState([]);
  const [searchField, setsearchField] = useState("");

  const getMonster = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setMonster(json));
  };

  useEffect(() => {
    getMonster();
  }, []);

  const filteredData = monster.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setsearchField(searchField);
  };
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        className="monster-serach-box"
        placeholder="search monster..."
      />
      {filteredData.length > 0 ? (
        <CardList filteredData={filteredData} />
      ) : (
        <p className="white-text">No data found</p>
      )}
    </div>
  );
}
