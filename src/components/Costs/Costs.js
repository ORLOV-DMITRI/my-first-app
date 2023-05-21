import { useState } from "react";
import Card from "../UI/Card";
import CostItem from "./CostItem";
import "./Costs.css";
import CostsFilter from "./CostsFilter";

const Costs = ({ costs }) => {
  const [year, setYear] = useState("2020");

  const changeYearHandler = (year) => {
    setYear(year);
  };

  return (
    <Card className="costs">
      <CostsFilter year={year} onChangeYear={changeYearHandler} />
      <div>
        <CostItem
          date={costs[0].costDate}
          costDescription={costs[0].costDescription}
          costPrice={costs[0].costPrice}
        />

        <CostItem
          date={costs[1].costDate}
          costDescription={costs[1].costDescription}
          costPrice={costs[1].costPrice}
        />

        <CostItem
          date={costs[2].costDate}
          costDescription={costs[2].costDescription}
          costPrice={costs[2].costPrice}
        />
      </div>
    </Card>
  );
};
export default Costs;
