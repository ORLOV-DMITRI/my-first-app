import Card from "../UI/Card";
import CostDate from "./CostDate";
import "./CostItem.css";

function CostItem(props) {
  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />
        <div className="cost-item__description">
          <h2>{props.costDescription}</h2>
          <div className="cost-item__price">{props.costPrice}$</div>
        </div>
      </Card>
    </li>
  );
}

export default CostItem;
