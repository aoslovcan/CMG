import React, { useState } from "react";

import "./BoxResizing.css";
function BoxResizing(props) {
  const [data, setData] = useState({ height: "300", width: "300" });
  const { height, width } = data;

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    //get div for sizing
    const elem = document.querySelector(".container");
    //console.log(elem);

    //adding width to div
    elem.style.width = width + "px";

    //adding height to div
    elem.style.height = height + "px";
  };

  return (
    <div className="box-sizing">
      <div className="container"></div>
      <form>
        <div className="form-control">
          <label className="control-label">Visina: </label>
          <input
            className="control-input"
            type="range"
            min="1"
            max="500"
            name="height"
            onChange={changeHandler}
            value={height}
          />
          <label className="control-label">Širina: </label>
          <input
            className="control-input"
            type="range"
            min="1"
            max="500"
            name="width"
            onChange={changeHandler}
            value={width}
          />
        </div>

        <div className="form-control">
          <label className="control-label">Visina: </label>
          <input
            className="control-input"
            type="number"
            name="height"
            onChange={changeHandler}
            value={height}
            min="1"
            max="500"
          />

          <label className="control-label">Širina: </label>
          <input
            className="control-input"
            type="number"
            name="width"
            onChange={changeHandler}
            value={width}
            min="1"
            max="500"
          />
        </div>
      </form>
    </div>
  );
}

export default BoxResizing;
