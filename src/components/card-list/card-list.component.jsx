import { Component } from "react";

class CardList extends Component {
  render() {
    console.log("render from CardList");
    const { filteredData } = this.props;
    return (
      <div>
        {filteredData.map((data) => {
          return <h1 key={data.id}>{data.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;
