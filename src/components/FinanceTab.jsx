import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

export const FinanceTab = () => {
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
      <div className="card w-full rounded-2xl mx-2">
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Offering" {...a11yProps(0)} />
            <Tab label="Expenses" {...a11yProps(1)} />
          </Tabs>
        </Box>
      </div>
      <CustomTabPanel value={value} index={0}></CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        CustomTabPanel 2
      </CustomTabPanel>
    </>
  );
};
