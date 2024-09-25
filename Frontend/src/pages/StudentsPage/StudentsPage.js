import React from 'react';
import ManagementTablePage from './ManagementTablePage'; // Import the reusable ManagementTablePage

const StudentsPage = () => {
  const studentsData = [
  {
    person: {
      title: 'Bob',
      subtitle: 'Grade 10',
      details: 'High achiever in mathematics',
      img: '',
    },
    week1: {
      tasks: 'completed',
      presence: 'present',
    },
    week2: {
      tasks: 'incomplete',
      presence: 'absent',
    },
    week3: {
      tasks: 'completed',
      presence: 'present',
    },
  },
  {
    person: {
      title: 'Alice',
      subtitle: 'Grade 11',
      details: 'Science enthusiast',
      img: 'https://example.com/.jpg',
    },
    week1: {
      tasks: 'completed',
      presence: 'present',
    },
    week2: {
      tasks: 'completed',
      presence: 'present',
    },
    week3: {
      tasks: 'incomplete',
      presence: 'absent',
    },
  },
];

  return (
    <div>
      <h1>Students Table</h1>
      {/* Pass student data to the generic ManagementTablePage */}
      <ManagementTablePage data={studentsData} />
    </div>
  );
};

export default StudentsPage;
