import { useQuery } from "react-query";

const fetchDataFromCsv = async () => {
  try {
    const response = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vREpjJuwTQHVPX0iaQDkdA_1avw2ncdYuzWA5dHQ4tYJQP8Nar88uP03tNO6cUtwVFUT-P9uTZYFu9M/pub?gid=0&single=true&output=csv"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from Google Sheets");
    }

    const csvData = await response.text();
    const parsedData = parseCsv(csvData);
    return parsedData;
  } catch (error) {}
};

const parseCsv = (csvData) => {
  return csvData.split("\n").map((row) => row.split(","));
};

const useGoogleSheetsData = () => {
  return useQuery("googleSheetsData", fetchDataFromCsv);
};

export default useGoogleSheetsData;
