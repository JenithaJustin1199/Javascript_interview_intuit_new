import { type } from "@testing-library/user-event/dist/type";
import { useRef } from "react";

const CustomUseEffect = (effect,deps)=>{
    // first render
    let firstRender = useRef(true)
    let prevDeps = useRef([])
    if(firstRender.current){
        const cleanup =effect()
        
        firstRender.current = false
        return ()=>{
            if (cleanup && typeof cleanup == "function"){
                cleanup()
            }
        }
    }

    //deps array changed / no deps array
    let depsChanged = deps?JSON.stringify(prevDeps.current)===JSON.stringify(deps):true
    if(depsChanged){
       const cleanup = effect()
       if (cleanup && typeof cleanup == "function"){
        cleanup()
    }
    }
    prevDeps.current = deps ||[]
    //return or clean up function


}

export default CustomUseEffect;


//Driver code
import { useEffect,useState } from 'react';
import './App.css';
import CustomUseEffect from './hooks/customUseEffect';

function App() {
const [count, setCount] = useState(0)
const [count2, setCount2] = useState(0)
CustomUseEffect(()=>{
  console.log("From useEffect",count)
  return ()=>{
    console.log("cleanup called")
  }
},[count])

const handleCounterIncrement =()=>{
  setCount(count+1)
}
const handleCounterDecrement =()=>{
  setCount(count-1)
}
  return (
    <div className="App">
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
    </div>
  );
}

export default App;
