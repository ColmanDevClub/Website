import React from 'react';
import ControlTable from '../../components/ControlTable/ControlTable'; 

const ManagementTablePage = ( {data}) => {

  const presenceColorsMap = {
    missed: '#FF7675',
    approved: '#FE9210',
    arrived: '#36B176',
};

const tasksColorsMap = {
    didNotSubmit: '#FF7675',
    approved: '#FE9210',
    completed: '#36B176',
    waitForPR: '#2382DB'
};

const columnColorsMap = {
    tasks: tasksColorsMap,
    presence: presenceColorsMap
};
  return (
    <div style={{ padding: '20px' }}>
      <h1>Management Table</h1>
      <ControlTable data={data} columnColorsMap={columnColorsMap}/>
    </div>
  );
};

export default ManagementTablePage;
