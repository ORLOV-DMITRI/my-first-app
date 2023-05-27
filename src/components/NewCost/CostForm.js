import { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const nameChangeHadler = (event) => {
    setName(event.target.value);
  };
  const amountChangeHadler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHadler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      costDescription: name,
      costPrice: amount,
      costDate: new Date(date),
    };
    props.onSaveCostData(costData);

    setName("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input
            type="text"
            onChange={nameChangeHadler}
            value={name}
            placeholder="Укажите название"
          />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            min={"0.01"}
            step={"0.01"}
            onChange={amountChangeHadler}
            value={amount}
            placeholder="Укажите цену"
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min={"2019-01-01"}
            step={"2023-12-31"}
            onChange={dateChangeHadler}
            value={date}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
        </div>
        <div>
          <button type="button" onClick={props.onCloseForm}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};
export default CostForm;

//   // Возможный подход с одним состоянием
//   const [userInput, setUserInput] = useState({
//     name: "",
//     amount: "",
//     date: "",
//   });

//   const nameChangeHadler = (event) => {
//     // setUserInput({
//     //   ...userInput,
//     //   name: event.target.value,
//     // });
//     // При использование предидущего состояния - используем колбек;
//     setUserInput((previousState) => {
//         return {
//             ...previousState,
//             name: event.target.value,
//         }
//     })
//   };
//   const amountChangeHadler = (event) => {
//     setUserInput({
//       ...userInput,
//       amount: event.target.value,
//     });
//   };
//   const dateChangeHadler = (event) => {
//     setUserInput({
//       ...userInput,
//       date: event.target.value,
//     });
//   };
