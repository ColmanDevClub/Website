import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import MainColumnItem from './MainColumnItem';
import './controlTable.css';

const ControlTable = ({ data }) => {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const generateColumns = (data) => {
    const firstRow = data[0];
    const mainColumnKey = Object.keys(firstRow)[0];

    const generatedColumns = [
      {
        field: mainColumnKey,
        headerName: mainColumnKey,
        width: 300,
        renderCell: (row) => {
          const mainColumnData = row[mainColumnKey];
          return <MainColumnItem data={mainColumnData} />;
        },
      },
    ];

    Object.keys(firstRow).forEach((key) => {
      if (key !== mainColumnKey) {
        const subColumns = firstRow[key];
        if (typeof subColumns === 'object') {
          Object.keys(subColumns).forEach((subKey) => {
            generatedColumns.push({
              field: `${key}_${subKey}`,
              headerName: `${key} - ${subKey}`,
              width: 150,
            });
          });
        } else {
          generatedColumns.push({
            field: key,
            headerName: key,
            width: 150,
          });
        }
      }
    });

    return generatedColumns;
  };

  const generateRows = (data) => {
    const mainColumnKey = Object.keys(data[0])[0];

    return data.map((rowData, index) => {
      const row = {
        id: index + 1,
        [mainColumnKey]: rowData[mainColumnKey],
      };

      // Add data for other columns
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

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      const newColumns = generateColumns(data);
      const newRows = generateRows(data);
      setColumns(newColumns);
      setRows(newRows);
    }
  }, [data]);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field}>{column.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => {
                const value = row[column.field];
                if (column.field === columns[0].field) {
                  // Main column, render MainColumnItem
                  return (
                    <TableCell key={column.field} sx={{padding:'0'}}>
                      {column.renderCell(row)}
                    </TableCell>
                  );
                } else {
                  return (
                    <TableCell key={column.field} >{value}</TableCell>
                  );
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ControlTable;
