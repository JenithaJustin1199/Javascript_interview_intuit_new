import React, { useState, useRef } from "react";
import mockData from "./mockData";
import { debounce } from "./useDebounce";

const AutoComplete = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  // cache reference (persists between re-renders)
  const cacheRef = useRef({});

  const filterResult = (query) => {
    if (!query.trim()) {
      setResult([]);
      return;
    }

    // 1️⃣ Check from cache
    if (cacheRef.current[query]) {
      console.log("FROM CACHE:", query);
      setResult(cacheRef.current[query]);
      return;
    }

    // 2️⃣ Compute fresh result
    const filtered = mockData.filter((data) =>
      data.toLowerCase().includes(query.toLowerCase())
    );

    // 3️⃣ Store in cache
    cacheRef.current[query] = filtered;

    setResult(filtered);
  };

  const debouncedFilter = debounce(filterResult, 1000);

  return (
    <div>
      <input
        className="inputBox"
        type="text"
        value={query}
        placeholder="Search..."
        onChange={(e) => {
          setQuery(e.target.value);
          debouncedFilter(e.target.value);
        }}
      />

      {result.length > 0 && (
        <ul className="list">
          {result.map((val) => (
            <li key={val}>{val}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;

export const mockData = [
  "Javascript",
  "Java",
  "Javascript courses",
  "Javascript tutorials",
  "React",
  "React course",
];
export const debounce = (expFunction, delay)=>{
let timer
  return function(){
    let context = this
    let args = arguments
    clearTimeout(timer)
    timer=setTimeout(()=>{
      expFunction.apply(context,args)
    }, delay)
  }
}
ccs
.inputBox {
  width: 300px;
  padding: 10px;
  font-size: 16px;

  border: 1px solid #ccc;
  border-radius: 4px;

  outline: none;
}

.inputBox:focus {
  border-color: #999;
}

/* Suggestions box */
.list {
  width: 300px;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;

  margin: 0;
  padding: 0;
  list-style: none;
}

.list li {
  padding: 8px;
  cursor: pointer;
}

.list li:hover {
  background-color: #f2f2f2;
}
