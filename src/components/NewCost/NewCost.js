import { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    props.onAddCost(costData);
  };

  const openNewCostFormHandler = () => {
    setIsOpen((prevIsOpen) => {
      return !prevIsOpen;
    });
  };
  if (isOpen) {
    return (
      <div className="new-cost">
        <button onClick={openNewCostFormHandler}>Добавить новый расход</button>
      </div>
    );
  }

  return (
    <div className="new-cost">
      <CostForm
        onSaveCostData={saveCostDataHandler}
        onCloseForm={openNewCostFormHandler}
      />
    </div>
  );
};
export default NewCost;
