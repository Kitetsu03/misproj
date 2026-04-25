import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DropdownAddress from "../buttons/DropdownAddress.jsx";
import { useState, useEffect } from "react";
import {
  getRegions,
  getCities,
  getProvinces,
  getBarangays,
} from "../../../services/locationService.js";

export const CenteredTabs = () => {
  const [value, setValue] = useState(0);
  const [region, setRegion] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [brgy, setBrgy] = useState("");

  const [regions, setRegions] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [barangays, setBarangays] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const [maritalStatus, setMaritalStatus] = useState("");
  const [birthdate, setBirthDate] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const locationCache = {
    regions: [],
    provinces: {},
    cities: {},
    barangays: {},
  };

  // Load Regions (on mount)
  useEffect(() => {
    const fetchRegions = async () => {
      const res = await getRegions();

      setRegions(
        res.map((r) => ({
          label: r.name,
          value: r.code,
        })),
      );
    };

    fetchRegions();
  }, []);

  // Load Provinces depends on region
  useEffect(() => {
    if (!region) return;

    const fetchProvincesData = async () => {
      if (locationCache.provinces[region]) {
        setProvinces(locationCache.provinces[region]);
        return;
      }

      const res = await getProvinces(region);

      const formatted = res.map((p) => ({
        label: p.name,
        value: p.code,
      }));

      locationCache.provinces[region] = formatted;
      setProvinces(formatted);
    };

    fetchProvincesData();
  }, [region]);

  // Load Cities (depends on province)
  useEffect(() => {
    if (!province) return;

    const fetchCitiesData = async () => {
      if (locationCache.cities[province]) {
        setCities(locationCache.cities[province]);
        return;
      }

      try {
        const res = await getCities(province);

        const formatted = res.map((c) => ({
          label: c.name,
          value: c.code,
        }));
        locationCache.cities[province] = formatted;

        setCities(formatted);
      } catch (err) {
        console.error("Failed to fetch cities:", err);
      }
    };

    fetchCitiesData();
  }, [province]);
  useEffect(() => {
    if (!city) return;

    const fetchBarangaysData = async () => {
      if (locationCache.barangays[city]) {
        setBarangays(locationCache.barangays[city]);
        return;
      }

      try {
        const res = await getBarangays(city);

        const formatted = res.map((b) => ({
          label: b.name,
          value: b.code,
        }));

        locationCache.barangays[city] = formatted;

        setBarangays(formatted);
      } catch (err) {
        console.error("Failed to fetch barangays:", err);
      }
    };

    fetchBarangaysData();
  }, [city]);

  // To reset each drops when parent changed
  useEffect(() => {
    setProvince("");
    setCity("");
    setBrgy("");
  }, [region]);

  useEffect(() => {
    setCity("");
    setBrgy("");
  }, [province]);

  useEffect(() => {
    setBrgy("");
  }, [city]);

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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="font-medium">Middle Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter middle name"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="font-medium">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter last name"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Status</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Marital Status"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="font-medium">Birth Date</label>
            <input
              type="date"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="mm/dd/yy"
              value={birthdate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <form autoComplete="off">
            {/* Region */}
            <DropdownAddress
              label="Region"
              value={region}
              onChange={setRegion}
              placeholder="Select Region"
              options={regions}
            />
          </form>
          <form autoComplete="off">
            {/* Province */}
            <DropdownAddress
              label="Province"
              value={province}
              onChange={setProvince}
              placeholder="Select Province"
              options={provinces}
              disabled={!region}
            />
          </form>

          <form autoComplete="off">
            {/* City / Municipality */}
            <DropdownAddress
              label="City / Municipality"
              value={city}
              onChange={setCity}
              placeholder="Select City / Municipality"
              options={cities}
              disabled={!province}
            />
          </form>

          <form autoComplete="off">
            {/* Barangay */}
            <DropdownAddress
              label="Barangay"
              value={brgy}
              onChange={setBrgy}
              placeholder="Select Barangay"
              options={barangays}
              disabled={!city}
            />
          </form>
          <div className="md:col-span-1 space-y-1">
            <label className="font-medium">Role</label>
            <select className="w-full p-3 border rounded-lg text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Member</option>
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
              placeholder="0912 345 6789"
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
        </div>
      </CustomTabPanel>
    </>
  );
};
