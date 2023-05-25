import CostItem from "./CostItem";
import "./CostList.css";

const CostList = ({ costs }) => {
  if (costs.length === 0) {
    return <h2 className="cost-list__fallback">Расходов в Этом Году Нет</h2>;
  }
  return (
    <ul className="cost-list">
      {costs.map((cost) => (
        <CostItem
          date={cost.costDate}
          costDescription={cost.costDescription}
          costPrice={cost.costPrice}
          key={cost.id}
        />
      ))}
    </ul>
  );
};
export default CostList;
