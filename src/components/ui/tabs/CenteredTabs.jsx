import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

export const CenteredTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <>
      <div className="bg-white w-full rounded-2xl mx-2">
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            indicatorColor="primary"
            textColor="bg-black"
          >
            <Tab label="Personal Info" {...a11yProps(0)} />
            <Tab label="Contact Details" {...a11yProps(1)} />
            <Tab label="Church Info" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </div>
      <CustomTabPanel value={value} index={0}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="space-y-2">
            <label className="font-medium">First Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter First Name"
            />
          </div>
          <div className="space-y-2">
            <label className="font-medium">Last Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter last name"
            />
          </div>

          <div className="space-y-1">
            <label className="font-medium">Birth Date</label>
            <input
              type="date"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="mm/dd/yy"
            />
          </div>

          <div className="md:col-span-1 space-y-1">
            <label className="font-medium">Role</label>
            <select className="w-full p-3 border rounded-lg text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Member</option>
              <option>Admin</option>
              <option>Gatekeeper</option>
            </select>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="grid grid-cols-1 gap-6 ">
          <div className="space-y-2">
            <label className="font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="email@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="font-medium">Phone Number</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="(+63) 912 345 6789"
            />
          </div>
          <div className="space-y-2">
            <label className="font-medium">Address</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Full Address"
            />
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="grid grid-cols-1 gap-6 ">
          <div className="space-y-2">
            <label className="font-medium">Join Date</label>
            <input
              type="date"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="mm/dd/yy"
            />
          </div>
          <div className="space-y-2">
            <label className="font-medium">LifeGroup</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter LifeGroup Name"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Status</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Marital Status"
            />
          </div>
        </div>
      </CustomTabPanel>
    </>
  );
};
