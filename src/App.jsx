import { useState } from "react";
import { PieChart } from "./components/PieChart/PieChart";
import { Form } from "./components/Form/Form";
import "./App.css";

function App() {
  const [values, setValues] = useState({ percent: 100, waste: 50 });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (value < 0) {
      alert("Percent and Waste cannot be Negative Number");
    } else {
      setValues((prev) => ({ ...prev, [id]: value }));
    }
  };

  return (
    <div className="app">
      <h1 className="title">Waste Food Percentage</h1>

      <div className="main">
        <div>
          <Form handleChange={handleChange} values={values} />
        </div>

        <div>
          <PieChart
            data={[
              {
                id: "Success",
                value: values.percent - values.waste,
              },
              {
                id: "Waste",
                value: values.waste,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
