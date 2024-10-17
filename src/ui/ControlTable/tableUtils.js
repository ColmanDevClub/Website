
import React from 'react';
import MainColumnItem from './MainColumnItem';

export const generateColumns = (data) => {
  const firstRow = data[0];
  const mainColumnKey = Object.keys(firstRow)[0];

  const mainColumn = {
    field: mainColumnKey,
    headerName: mainColumnKey,
    width: 330,
    renderCell: (row) => {
      const mainColumnData = row[mainColumnKey];
      return <MainColumnItem data={mainColumnData} />;
    },
  };

  const columns = [mainColumn];

  Object.keys(firstRow).forEach((key) => {
    if (key !== mainColumnKey) {
      const subColumnsData = firstRow[key];
      if (typeof subColumnsData === 'object') {
        const subColumns = Object.keys(subColumnsData).map((subKey) => ({
          field: `${key}_${subKey}`,
          headerName: subKey,
          width: 100,
          type: subKey,
        }));
        columns.push({
          headerName: key,
          subColumns: subColumns,
          width: subColumns.reduce((sum, subCol) => sum + subCol.width, 0),
        });
      } else {
        columns.push({
          field: key,
          headerName: key,
          width: 150,
          type: key,
        });
      }
    }
  });

  return columns;
};

export const generateRows = (data) => {
  const mainColumnKey = Object.keys(data[0])[0];

  return data.map((rowData, index) => {
    const row = {
      id: index + 1,
      [mainColumnKey]: rowData[mainColumnKey],
    };

    Object.keys(rowData).forEach((key) => {
      if (key !== mainColumnKey) {
        const subColumns = rowData[key];
        if (typeof subColumns === 'object') {
          Object.keys(subColumns).forEach((subKey) => {
            row[`${key}_${subKey}`] = subColumns[subKey];
          });
        } else {
          row[key] = rowData[key];
        }
      }
    });

    return row;
  });
};

