// Pagination.js
import React, { useState } from 'react';
import './Pagination.css'; // Import the CSS file for styling

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
    <div className="pagination-container">
      {/* Step 6: Render the current page items */}
      <ul className="pagination-list">
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Step 7: Render pagination controls */}
      <div className="pagination-controls">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            // Step 8: Render button for each page
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={currentPage === page}
              className={currentPage === page ? 'active' : ''} // Step 9: Add 'active' class for the current page
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Pagination;
