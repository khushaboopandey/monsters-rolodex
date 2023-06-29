import "./card-list.styles.css";
import Card from "../card/card-component";

const CardList = ({ filteredData }) => {
  return (
    <div className="card-list">
      {filteredData.map((data) => {
        return <Card key={data.id} data={data} />;
      })}
    </div>
  );
};

export default CardList;
