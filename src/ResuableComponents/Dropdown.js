import React from "react";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Dropdown = ({
  value,
  onChange,
  dropdownOptions,
  width = 300,
  dropdownLabel = "dropdownLabel",
  specificValueForDropdown,
}) => {
  return (
    <div>
      <FormControl sx={{ width: width }}>
        <InputLabel id="demo-simple-select-label">{dropdownLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={dropdownLabel}
          onChange={(e) => onChange(e.target.value, specificValueForDropdown)}
        >
          {dropdownOptions?.map((item) => {
            return <MenuItem value={item.value}>{item.label}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
