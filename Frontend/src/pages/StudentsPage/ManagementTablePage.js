import React from 'react';
import ControlTable from '../../components/ControlTable/ControlTable'; // Import the generic ControlTable component

const ManagementTablePage = ( {data}) => {


  return (
    <div style={{ padding: '20px' }}>
      <h1>Management Table</h1>
      {/* Use the generic ControlTable component and pass the management data */}
      <ControlTable data={data} />
    </div>
  );
};

export default ManagementTablePage;
