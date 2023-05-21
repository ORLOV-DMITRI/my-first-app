import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
    {
      id: "c1",
      costDate: new Date(2021, 0, 2),
      costDescription: "Холодильник",
      costPrice: 999.99,
    },
    {
      id: "c2",
      costDate: new Date(2021, 5, 12),
      costDescription: "Стиральная машина",
      costPrice: 450.8,
    },
    {
      id: "c3",
      costDate: new Date(2021, 9, 24),
      costDescription: "Пылесос",
      costPrice: 25.25,
    },
  ];
  const addCostHandler = (cost) => {
    console.log(cost);
    console.log("App");
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
