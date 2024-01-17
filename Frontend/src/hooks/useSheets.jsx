import { useState, useEffect } from 'react';

const useGoogleSheetsData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vREpjJuwTQHVPX0iaQDkdA_1avw2ncdYuzWA5dHQ4tYJQP8Nar88uP03tNO6cUtwVFUT-P9uTZYFu9M/pub?gid=0&single=true&output=csv'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data from Google Sheets');
        }

        const csvData = await response.text();
        const parsedData = parseCsv(csvData);

        setData(parsedData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

const parseCsv = (csvData) => {
  return csvData.split('\n').map((row) => row.split(','));
};

export default useGoogleSheetsData;
