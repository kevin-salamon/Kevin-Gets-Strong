import axios from "axios";

export const saveEntry = entryData => {
  return axios.post("/api/entries", entryData);
}

export const getSavedEntries = () => {
  return axios.get("/api/entries");
}

export const removeEntry = entryId => {
  return axios.delete(`/api/entries/${entryId}`);
}

export const updateEntry = (entryId, entryData) => {
  return axios.put(`/api/entries/${entryId}`, entryData);
}

export default {
  saveEntry,
  getSavedEntries,
  removeEntry,
  updateEntry
}