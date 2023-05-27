import { useState } from "react";
import Card from "../UI/Card";
import "./Costs.css";
import CostsFilter from "./CostsFilter";
import CostsList from "./CostsList";
import CostsDiagram from "./CostsDiagram";

const Costs = ({ costs }) => {
  const [year, setYear] = useState("2023");
  const changeYearHandler = (year) => {
    setYear(year);
  };
  const filterCosts = costs.filter(
    (cost) => cost.costDate.getFullYear() == year
  );

  return (
    <Card className="costs">
      <CostsFilter year={year} onChangeYear={changeYearHandler} />
      <CostsDiagram costs={filterCosts} />
      <CostsList costs={filterCosts}></CostsList>
    </Card>
  );
};
export default Costs;
