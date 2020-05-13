import axios from "axios";

export const saveEntry = entryData => {
  return axios.post("/api/entries", entryData);
}

export const getSavedEntries = () => {
  return axios.get("/api/entries");
}

export const removeEntry = entryId => {
  return axios.delete(`/api/entries/${entryId}`)
}

export default {
  saveEntry,
  getSavedEntries,
  removeEntry,
}