import React from "react";
import InputField from "../components/InputField"

const Location = ({handleChange}) => {
    //sibar vala css and checkmark vala all in app .css
    //all location filtered based upon main function filtered data
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <InputField
          onChange={handleChange}
          value="london"
          title="London"
          name="test"
        />
        <InputField
          onChange={handleChange}
          value="Seattle"
          title="Seattle"
          name="test"
        />
        <InputField
          onChange={handleChange}
          value="madrid"
          title="Madrid"
          name="test"
        />
        <InputField
          onChange={handleChange}
          value="boston"
          title="Boston"
          name="test"
        />
      </div>
    </div>
  );
}
export default Location