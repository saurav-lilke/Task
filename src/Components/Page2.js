import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Dropdown from "../ResuableComponents/Dropdown";

const Page2 = () => {
  let dropdownOptions = [
    { label: "channel-1", value: "channel-1" },
    { label: "channel-2", value: "channel-2" },
    { label: "channel-3", value: "channel-2" },
    { label: "channel-4", value: "channel-4" },
    { label: "channel-5", value: "channel-5" },
    { label: "channel-6", value: "channel-6" },
    { label: "channel-7", value: "channel-7" },
    { label: "channel-8", value: "channel-8" },
    { label: "channel-9", value: "channel-9" },
    { label: "channel-10", value: "channel-10" },
  ];

  const [dropdown1, setdropdown1] = useState({ primary: "", secondary: "" });
  const handleChange1 = (value, specificValueForDropdown) => {
    if (specificValueForDropdown === "primary") {
      setdropdown1({ ...dropdown1, primary: value });
    } else {
      setdropdown1({ ...dropdown1, secondary: value });
    }
  };

  return (
    <>
      <div className="page2">
        <h2>Page 2</h2>
        <div className="white-row c3-a2">
          <div className="name">C3-A2</div>
          <div className="dropdown1">
            <Dropdown
              dropdownOptions={dropdownOptions}
              options={dropdownOptions}
              value={dropdown1.primary}
              onChange={handleChange1}
              specificValueForDropdown="primary"
            />
          </div>
          <div className="dropdown2">
            <Dropdown
              dropdownOptions={dropdownOptions}
              value={dropdown1.secondary}
              onChange={handleChange1}
              specificValueForDropdown="secondary"
            />
          </div>
          <div className="add-backup-channels">+ Add Backup Channels</div>
        </div>
        <div className="white-row c4-a1">
          <div className="name">C4-A1</div>
          <div className="dropdown1">
            <Dropdown
              dropdownOptions={dropdownOptions}
              value={dropdown1.secondary}
              onChange={handleChange1}
              specificValueForDropdown="secondary"
            />
          </div>
          <div className="dropdown2">
            <Dropdown
              dropdownOptions={dropdownOptions}
              value={dropdown1.secondary}
              onChange={handleChange1}
              specificValueForDropdown="secondary"
            />
          </div>
          <div className="add-backup-channels">+ Add Backup Channels</div>
        </div>
        <div className="white-row eogl-a2">
          <div className="name">EOGL-A2</div>
          <div className="dropdown1">
            <Dropdown
              dropdownOptions={dropdownOptions}
              value={dropdown1.secondary}
              onChange={handleChange1}
              specificValueForDropdown="secondary"
            />
          </div>
          <div className="dropdown2">
            <Dropdown
              dropdownOptions={dropdownOptions}
              value={dropdown1.secondary}
              onChange={handleChange1}
              specificValueForDropdown="secondary"
            />
          </div>
          <div className="add-backup-channels">+ Add Backup Channels</div>
        </div>
        <div className="white-row eogr-a1">
          <div className="name">EOGR-A1</div>
          <div className="dropdown1">
            <Dropdown
              dropdownOptions={dropdownOptions}
              value={dropdown1.secondary}
              onChange={handleChange1}
              specificValueForDropdown="secondary"
            />
          </div>
          <div className="dropdown2">
            <Dropdown
              dropdownOptions={dropdownOptions}
              value={dropdown1.secondary}
              onChange={handleChange1}
              specificValueForDropdown="secondary"
            />
          </div>
          <div className="add-backup-channels">+ Add Backup Channels</div>
        </div>
        <div className="white-row emg">
          <div className="name">EMGF</div>
          <div className="dropdown1">
            <Dropdown
              dropdownOptions={dropdownOptions}
              value={dropdown1.secondary}
              onChange={handleChange1}
              specificValueForDropdown="secondary"
            />
          </div>
          <div className="dropdown2">
            <Dropdown
              dropdownOptions={dropdownOptions}
              value={dropdown1.secondary}
              onChange={handleChange1}
              specificValueForDropdown="secondary"
            />
          </div>
          <div className="add-backup-channels">+ Add Backup Channels</div>
        </div>
      </div>
    </>
  );
};

export default Page2;
