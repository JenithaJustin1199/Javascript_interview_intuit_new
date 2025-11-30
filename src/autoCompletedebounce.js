import React, { useState } from "react";
import { mockData } from "./mockData";
import { debounce } from "./useDebounce";

const AutoComplete = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const filterResult = (query) => {
    if (!query.trim()) {
      setResult([]);
      return;
    }

    const filtered = mockData.filter((data) =>
      data.toLowerCase().includes(query.toLowerCase())
    );

    setResult(filtered); // important: update state
  };

  const debouncedFilter = debounce(filterResult, 1000);

  return (
    <div>
      <input
        className="inputBox"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          debouncedFilter(e.target.value); // correct usage
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
