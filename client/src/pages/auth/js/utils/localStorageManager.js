import { timeOutDuration } from "./constant.js";

const setValue = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const getValue = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const removeValue = (key) => {
    localStorage.removeItem(key);
}

const getSessionTimeoutDuration = () => {
    return timeOutDuration * 60 * 1000;
}

export { setValue, getValue, removeValue, getSessionTimeoutDuration };