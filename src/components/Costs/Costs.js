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
  const filterCosts = costs.filter(
    (cost) => cost.costDate.getFullYear() == year
  );

  return (
    <Card className="costs">
      <CostsFilter year={year} onChangeYear={changeYearHandler} />
      <div>
        {filterCosts.map((cost) => (
          <CostItem
            date={cost.costDate}
            costDescription={cost.costDescription}
            costPrice={cost.costPrice}
            key={cost.id}
          />
        ))}
      </div>
    </Card>
  );
};
export default Costs;
