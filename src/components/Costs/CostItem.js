import { useState } from "react";
import Card from "../UI/Card";
import CostDate from "./CostDate";
import "./CostItem.css";

function CostItem(props) {
  const [costDescription, setCostDescription] = useState(props.costDescription);

  const changeDescrHandler = () => {
    setCostDescription("Пылесос");
  };

  return (
    <Card className="cost-item">
      <CostDate date={props.date} />

      <div className="cost-item__description">
        <h2>{costDescription}</h2>
        <div className="cost-item__price">{props.costPrice}$</div>
      </div>
      {/* <button onClick={changeDescrHandler}>Изменить описание</button> */}
    </Card>
  );
}

export default CostItem;
