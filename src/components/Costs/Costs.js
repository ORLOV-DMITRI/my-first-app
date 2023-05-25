import { useState } from "react";
import Card from "../UI/Card";
import "./Costs.css";
import CostsFilter from "./CostsFilter";
import CostsList from "./CostsList";

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
      <CostsList costs={filterCosts}></CostsList>
    </Card>
  );
};
export default Costs;
