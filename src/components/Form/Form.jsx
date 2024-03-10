import "./Form.css";

export const Form = ({ handleChange, values }) => {
  return (
    <div className="form">
      <div className="box">
        <label htmlFor="percent">Full Percent</label>
        <input
          id="percent"
          type="number"
          min={0}
          // max={100}
          placeholder="Write The Full Percent"
          onChange={handleChange}
          value={values.percent}
        />
      </div>

      <div className="box">
        <label htmlFor="waste">Waste Percent</label>
        <input
          id="waste"
          type="number"
          min={0}
          // max={100}
          placeholder="Write The Waste Percent"
          onChange={handleChange}
          value={values.waste}
        />
      </div>
    </div>
  );
};
