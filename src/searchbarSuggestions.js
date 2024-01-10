import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  // Step 1: Use state to manage the input value and suggestions
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Step 2: Use useEffect for handling debouncing and fetching suggestions
  useEffect(() => {
    // Step 3: Debounce function to delay API calls
    const debounce = (func, delay) => {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
      };
    };

    // Step 4: Function to fetch mock suggestions based on the searchTerm
    const fetchSuggestions = async (term) => {
      // Step 5: Mock API call with a delay
      setTimeout(() => {
        // Step 6: Mock suggestions array for testing
        const mockSuggestions = [
          'React',
          'JavaScript',
          'Debouncing',
          'Hooks',
          'State',
          'Props',
        ];

        // Step 7: Filter suggestions based on the searchTerm
        const filteredSuggestions = mockSuggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(term.toLowerCase())
        );

        // Step 8: Update suggestions in the state
        setSuggestions(filteredSuggestions);
      }, 300);
    };

    // Step 9: Debounce the fetchSuggestions function to avoid frequent API calls
    const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

    // Step 10: Call the debounced function when searchTerm changes
    debouncedFetchSuggestions(searchTerm);

    // Step 11: Cleanup function to clear suggestions when unmounting or searchTerm changes
    return () => setSuggestions([]);
  }, [searchTerm]);

  // Step 12: Function to handle input change
  const handleInputChange = (event) => {
    // Step 13: Update the searchTerm state when the input changes
    setSearchTerm(event.target.value);
  };

  // Step 14: Render the SearchBar component
  return (
    <div>
      {/* Step 15: Input for searching */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />

      {/* Step 16: Render suggestions as an unordered list */}
      <ul>
        {/* Step 17: Map through suggestions and render list items */}
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

// Step 18: Export the SearchBar component
export default SearchBar;
