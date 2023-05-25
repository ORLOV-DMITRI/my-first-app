import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
const initCosts = [
  {
    id: "c1",
    costDate: new Date(2021, 0, 2),
    costDescription: "Холодильник",
    costPrice: 999.99,
  },
  {
    id: "c2",
    costDate: new Date(2020, 5, 12),
    costDescription: "Стиральная машина",
    costPrice: 450.8,
  },
  {
    id: "c3",
    costDate: new Date(2019, 9, 24),
    costDescription: "Пылесос",
    costPrice: 25.25,
  },
  {
    id: "c4",
    costDate: new Date(2020, 9, 24),
    costDescription: "Cиги",
    costPrice: 2,
  },
];

function App() {
  const [costs, setCosts] = useState(initCosts);

  const addCostHandler = (cost) => {
    setCosts((prevState) => [cost, ...prevState]);
  };

  return (
    <div>
      <h1>Капсер</h1>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
