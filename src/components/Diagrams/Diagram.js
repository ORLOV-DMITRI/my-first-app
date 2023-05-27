import DiagramBar from "./DiagramBar";
import "./Diagram.css";

const Diagram = (props) => {
  const dataSetsValue = props.dataSets.map((data) => data.value);
  const maxMonthCosts = Math.max(...dataSetsValue);
  return (
    <div className="diagram">
      {props.dataSets.map((data) => {
        return (
          <DiagramBar
            value={data.value}
            maxValue={maxMonthCosts}
            label={data.label}
            key={data.label}
          />
        );
      })}
    </div>
  );
};

export default Diagram;
