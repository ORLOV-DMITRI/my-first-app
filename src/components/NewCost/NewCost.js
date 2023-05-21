import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    props.onAddCost(costData);
  };

  return (
    <div className="new-cost">
      <CostForm onSaveCostData={saveCostDataHandler} />
    </div>
  );
};
export default NewCost;
