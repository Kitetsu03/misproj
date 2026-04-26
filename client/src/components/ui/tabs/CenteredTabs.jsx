import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DropdownAddress from "../buttons/DropdownAddress.jsx";
import CustomTabPanel from "./CustomTabPanel.jsx";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState, useEffect, useRef } from "react";
import {
  getRegions,
  getCities,
  getProvinces,
  getBarangays,
} from "../../../services/locationService.js";
import { createMember } from "../../../services/memberService.js";
import validateAll from "../../../utils/validator.js";
import { memberPatterns } from "../../../utils/patterns.js";

export const CenteredTabs = () => {
  const [loadingRegions, setLoadingRegions] = useState(false);
  const [loadingProvinces, setLoadingProvinces] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  const [loadingBarangays, setLoadingBarangays] = useState(false);
  const [error, setError] = useState("");
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

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [lifeGroup, setLifeGroup] = useState("");
  const [role, setRole] = useState("Member");
  const [submitting, setSubmitting] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const locationCache = useRef({
    regions: [],
    provinces: {},
    cities: {},
    barangays: {},
  });

  // Load Regions (on mount)
  useEffect(() => {
    const fetchRegions = async () => {
      if (locationCache.current.regions.length > 0) {
        setRegions(locationCache.current.regions);
        return;
      }
      try {
        setLoadingRegions(true);
        const res = await getRegions();

        setRegions(
          res.map((r) => ({
            label: r.name,
            value: r.code,
          })),
        );
      } catch (err) {
        console.error("Failed to fetch regions:", err);
        setError("Failed to load Regions");
      } finally {
        setLoadingRegions(false);
      }
    };

    fetchRegions();
  }, []);

  // Load Provinces depends on region
  useEffect(() => {
    if (!region) return;

    const fetchProvincesData = async () => {
      if (locationCache.current.provinces[region]) {
        setProvinces(locationCache.current.provinces[region]);
        return;
      }

      try {
        setLoadingProvinces(true);
        const res = await getProvinces(region);

        const formatted = res.map((p) => ({
          label: p.name,
          value: p.code,
        }));

        locationCache.current.provinces[region] = formatted;
        setProvinces(formatted);
      } catch (err) {
        console.error("Failed to fetch provinces:", err);
        setError("Failed to load Provinces");
      } finally {
        setLoadingProvinces(false);
      }
    };

    fetchProvincesData();
  }, [region]);

  // Load Cities (depends on province)
  useEffect(() => {
    if (!province) return;

    const fetchCitiesData = async () => {
      if (locationCache.current.cities[province]) {
        setCities(locationCache.current.cities[province]);
        return;
      }

      try {
        setLoadingCities(true);
        const res = await getCities(province);

        const formatted = res.map((c) => ({
          label: c.name,
          value: c.code,
        }));
        locationCache.current.cities[province] = formatted;

        setCities(formatted);
      } catch (err) {
        console.error("Failed to fetch cities:", err);
        setError("Failed to load Cities");
      } finally {
        setLoadingCities(false);
      }
    };

    fetchCitiesData();
  }, [province]);
  useEffect(() => {
    if (!city) return;

    const fetchBarangaysData = async () => {
      if (locationCache.current.barangays[city]) {
        setBarangays(locationCache.current.barangays[city]);
        return;
      }

      try {
        setLoadingBarangays(true);
        const res = await getBarangays(city);

        const formatted = res.map((b) => ({
          label: b.name,
          value: b.code,
        }));

        locationCache.current.barangays[city] = formatted;

        setBarangays(formatted);
      } catch (err) {
        console.error("Failed to fetch barangays:", err);
        setError("Failed to load Barangays");
      } finally {
        setLoadingBarangays(false);
      }
    };

    fetchBarangaysData();
  }, [city]);

  // To reset each drops when parent changed
  const handleRegionChange = (value) => {
    setRegion(value);
    setProvince("");
    setCity("");
    setBrgy("");
  };

  const handleProvinceChange = (value) => {
    setProvince(value);
    setCity("");
    setBrgy("");
  };

  const handleCityChange = (value) => {
    setCity(value);
    setBrgy("");
  };

  const handleBrgyChange = (value) => {
    setBrgy(value);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const sanitizeInput = (value) => {
    return value.replace(/[<>/"'`;(){}]/g, "").trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const values = {
      firstName: sanitizeInput(firstName),
      middleName: sanitizeInput(middleName),
      lastName: sanitizeInput(lastName),
      maritalStatus: sanitizeInput(maritalStatus),
      email: email.trim(),
      phoneNumber: phoneNumber.trim(),
      lifeGroup: sanitizeInput(lifeGroup),
    };

    const validationErrors = validateAll(values, memberPatterns);

    if (!birthdate) validationErrors.push("Birthdate is required.");
    if (!joinDate) validationErrors.push("Join date is required.");
    if (!region) validationErrors.push("Region is required.");
    if (!province) validationErrors.push("Province is required.");
    if (!city) validationErrors.push("City is required.");
    if (!brgy) validationErrors.push("Barangay is required.");

    if (validationErrors.length > 0) {
      setSnackbarMessage(validationErrors.join("\n"));
      setSnackbarSeverity("warning");
      setOpenSnackbar(true);
      return;
    }

    const memberData = {
      first_name: sanitizeInput(firstName),
      middle_name: sanitizeInput(middleName),
      last_name: sanitizeInput(lastName),
      marital_status: sanitizeInput(maritalStatus),
      birthdate,
      region,
      province,
      city,
      barangay: brgy,
      role,
      email: email.trim(),
      contact_no: phoneNumber.trim(),
      join_date: joinDate,
      life_group: sanitizeInput(lifeGroup),
    };

    try {
      setSubmitting(true);
      setError("");

      await createMember(memberData);

      setFirstName("");
      setMiddleName("");
      setLastName("");
      setMaritalStatus("");
      setBirthDate("");
      setRegion("");
      setProvince("");
      setCity("");
      setBrgy("");
      setRole("Member");
      setEmail("");
      setPhoneNumber("");
      setJoinDate("");
      setLifeGroup("");

      setSnackbarMessage("Member added successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    } catch (err) {
      const backendMessage =
        err.response?.data?.errors?.join("\n") ||
        err.response?.data?.message ||
        "Failed to add member.";

      setSnackbarMessage(backendMessage);
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-white w-full max-w-4xl mx-auto rounded-2xl px-2 sm:px-4">
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity={snackbarSeverity}
            variant="filled"
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            indicatorColor="primary"
            textColor="primary"
            sx={{
              "& .MuiTab-root": {
                minWidth: "unset",
                px: 2,
                fontSize: {
                  xs: "0.75rem",
                  sm: "0.9rem",
                },
                whiteSpace: "nowrap",
              },
            }}
          >
            <Tab label="Personal Info" {...a11yProps(0)} />
            <Tab label="Contact Details" {...a11yProps(1)} />
            <Tab label="Church Info" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </div>
      <form onSubmit={handleSubmit} className="w-full overflow-x-hidden">
        <CustomTabPanel value={value} index={0}>
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="font-medium">First Name</label>
              <input
                type="text"
                className="w-full p-3 sm:p-3.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="font-medium">Middle Name</label>
              <input
                type="text"
                className="w-full p-3 sm:p-3.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                className="w-full p-3 sm:p-3.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter last name"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Status</label>
              <input
                type="text"
                className="w-full p-3 sm:p-3.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter Marital Status"
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <label className="font-medium">Birth Date</label>
              <input
                type="date"
                className="w-full p-3 sm:p-3.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="mm/dd/yy"
                value={birthdate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
            {/* Region */}
            <DropdownAddress
              label="Region"
              value={region}
              onChange={handleRegionChange}
              loading={loadingRegions}
              placeholder="Select Region"
              options={regions}
            />
            {/* Province */}
            <DropdownAddress
              label="Province"
              value={province}
              onChange={handleProvinceChange}
              loading={loadingProvinces}
              placeholder="Select Province"
              options={provinces}
              disabled={!region}
            />

            {/* City / Municipality */}
            <DropdownAddress
              label="City / Municipality"
              value={city}
              onChange={handleCityChange}
              loading={loadingCities}
              placeholder="Select City / Municipality"
              options={cities}
              disabled={!province}
            />

            {/* Barangay */}
            <DropdownAddress
              label="Barangay"
              value={brgy}
              onChange={handleBrgyChange}
              loading={loadingBarangays}
              placeholder="Select Barangay"
              options={barangays}
              disabled={!city}
            />

            <div className="md:col-span-1 space-y-1">
              <label className="font-medium">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-3 border rounded-lg text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="font-medium">Phone Number</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="0912 345 6789"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                value={joinDate}
                onChange={(e) => setJoinDate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="font-medium">LifeGroup</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter LifeGroup Name"
                value={lifeGroup}
                onChange={(e) => setLifeGroup(e.target.value)}
              />
            </div>
          </div>
        </CustomTabPanel>
        <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            {submitting ? "Adding Member..." : "Add Member"}
          </button>
        </div>
      </form>
    </>
  );
};
