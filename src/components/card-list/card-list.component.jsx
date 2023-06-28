import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card-component";

class CardList extends Component {
  render() {
    console.log("render from CardList");
    const { filteredData } = this.props;
    return (
      <div className="card-list">
        {filteredData.map((data) => {
          return <Card data={data} />;
        })}
      </div>
    );
  }
}

export default CardList;
