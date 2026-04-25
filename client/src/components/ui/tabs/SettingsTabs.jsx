import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { BlackButton } from "../buttons/BlackButton";
import { Input } from "../input/Input";
import { useState } from "react";

export const SettingsTabs = () => {
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
      <div className="card mx-2 w-full rounded-2xl">
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Church Info" {...a11yProps(0)} />
            <Tab label="Services" {...a11yProps(1)} />
            <Tab label="Ministries" {...a11yProps(2)} />
            <Tab label="Communications" {...a11yProps(3)} />
            <Tab label="Data and Backup" {...a11yProps(4)} />
          </Tabs>
        </Box>
      </div>
      <div className="card w-full mx-2 rounded-2xl gap-2 mt-2 p-2 flex flex-col font-secondary">
        <CustomTabPanel value={value} index={0}>
          <h2 className="font-semibold text-lg">Church Information</h2>
          <p className="px-2 text-sm text-gray-600 mb-8">
            Basic church details and contact information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <Input label="Church Name" />
            <Input label="Church Address" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input label="Phone" />
              <Input label="Email" />
              <Input label="Website" />
              <BlackButton val="Save Changes" />
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-semibold text-lg">Service Schedule</h2>
              <p className="text-sm text-gray-600 mb-8">
                Manage service times and locations.
              </p>
            </div>
            <div>
              <BlackButton val="+ Add Service" />
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-semibold text-lg">Ministry Management</h2>
              <p className="text-sm text-gray-600 mb-8">
                Configure church ministries and leadership assignments.
              </p>
            </div>
            <div>
              <BlackButton val="+ Add Ministry" />
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-semibold text-lg">Email Configuration</h2>
              <p className="text-sm text-gray-600 mb-8">
                Configure SMTP settings for system emails.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="SMTP Server" />
            <Input label="SMTP Port" />
          </div>
          <Input label="Username" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 pt-4">
            <button className="rounded-2xl font-black">○ Enable SSL/TLS</button>
            <BlackButton val="Save Email Settings" />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-semibold text-lg">Data Backup & Recovery</h2>
              <p className="text-sm text-gray-600 mb-8">
                Configure automatic backups and data retention policies.
              </p>

              <button className="rounded-2xl font-black">
                ○ Enable SSL/TLS
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Backup Frequency" />
            <Input label="Retention Days" />
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            <BlackButton val="Create Manual Backup" />
            <BlackButton val="Download Backup" />
            <BlackButton val="Restore from  Backup" />
          </div>
        </CustomTabPanel>
      </div>
    </>
  );
};
