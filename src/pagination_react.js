import React, { useState } from 'react';

const Pagination = ({ itemsPerPage, data }) => {
  // Step 1: Use state to manage the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Step 2: Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Step 3: Calculate the starting and ending indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Step 4: Slice the data array to get the items for the current page
  const currentItems = data.slice(startIndex, endIndex);

  // Step 5: Function to handle page changes
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {/* Step 6: Render the current page items */}
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Step 7: Render pagination controls */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={currentPage === page}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};

// Example usage
const App = () => {
  // Step 8: Create an array of sample data
  const data = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

  // Step 9: Render the Pagination component with itemsPerPage set to 5
  return <Pagination itemsPerPage={5} data={data} />;
};

export default App;
