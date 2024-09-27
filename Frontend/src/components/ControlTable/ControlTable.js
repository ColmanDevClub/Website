import React, { useState, useEffect } from 'react';
import {TableContainer,Table,TableBody,TableHead,TableRow,TableCell,Paper,} from '@mui/material';
import { styled } from '@mui/material/styles';
import MainColumnItem from './MainColumnItem';
import ColorSelect from '../ColorSelect/ColorSelect';

const StyledTableCell = styled(({ cellType, ...other }) => (
  <TableCell {...other} />
))(({ theme, cellType }) => ({
  backgroundColor: '#21213E',
  color: '#FFFFFF',
  padding: '0px',
  border: 'none',
  borderRadius: '5px',
  height:'50px',

  ...(cellType === 'header-top' && {
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    height:'50px'

  }),
  ...(cellType === 'header-middle' && {
    borderRadius: 0,
    height:'40px'

  }),
  ...(cellType === 'header-single' && {
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  }),
}));

const ControlTable = (props) => {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const generateColumns = (data) => {
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
            width: 100, // Set specific width for sub-columns
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

  const generateRows = (data) => {
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

  useEffect(() => {
    if (Array.isArray(props.data) && props.data.length > 0) {
      const newColumns = generateColumns(props.data);
      const newRows = generateRows(props.data);
      setColumns(newColumns);
      setRows(newRows);
    }
  }, [props.data]);

  const totalWidth = columns.reduce((sum, column) => sum + column.width + 20, 0);

  return (
    <TableContainer component={Paper} style={{ backgroundColor: '#121231', width: `${totalWidth}px`}}>
      <Table
        sx={{
          tableLayout: 'fixed',
          borderCollapse: 'separate',
          borderSpacing: '3px',
        }}
      >
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              let cellType;
              if (column.subColumns) {
                cellType = 'header-top';
              } else {
                cellType = 'header-single';
              }

              if (column.subColumns) {
                return (
                  <StyledTableCell
                    key={column.headerName}
                    colSpan={column.subColumns.length}
                    align="center"
                    style={{ width: column.width }}
                    cellType={cellType}
                  >
                    {column.headerName}
                  </StyledTableCell>
                );
              } else {
                return (
                  <StyledTableCell
                    key={column.field}
                    rowSpan={2}
                    style={{ width: column.width }}
                    cellType={cellType}
                  >
                    {column.headerName}
                  </StyledTableCell>
                );
              }
            })}
          </TableRow>
          {/* Second Header Row */}
          <TableRow>
            {columns.flatMap((column) => {
              if (column.subColumns) {
                return column.subColumns.map((subColumn) => (
                  <StyledTableCell
                    key={subColumn.field}
                    align="center"
                    style={{ width: subColumn.width }}
                    cellType="header-middle"
                  >
                    {subColumn.headerName}
                  </StyledTableCell>
                ));
              } else {
                return [];
              }
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.flatMap((column) => {
                if (column.subColumns) {
                  return column.subColumns.map((subColumn) => {
                    const value = row[subColumn.field];
                    const columnType = subColumn.type;
                    const colorMap = props.columnColorsMap[columnType];

                    return (
                      <StyledTableCell key={subColumn.field} style={{ width: subColumn.width }} cellType="body">
                        {colorMap && value && colorMap[value] !== undefined ? (
                          <ColorSelect
                            colors={colorMap}
                            onColorSelect={(color) =>
                              console.log(`Selected ${color.key} for ${subColumn.field}`)
                            }
                            defaultValue={value}
                          />
                        ) : (value)}
                      </StyledTableCell>
                    );
                  });
                } else {
                  if (column.renderCell) {
                    return (
                      <StyledTableCell key={column.field} cellType="body">
                        {column.renderCell(row)}
                      </StyledTableCell>
                    );
                  } else {
                    const value = row[column.field];
                    const columnType = column.type;
                    const colorMap = props.columnColorsMap[columnType];

                    return (
                      <StyledTableCell key={column.field} style={{ width: column.width }} cellType="body">
                        {colorMap && value && colorMap[value] !== undefined ? (
                          <ColorSelect
                            colors={colorMap}
                            onColorSelect={(color) =>
                              console.log(`Selected ${color.key} for ${column.field}`)
                            }
                            defaultValue={value}
                          />
                        ) : (value)}
                      </StyledTableCell>
                    );
                  }
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
