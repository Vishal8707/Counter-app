
import './App.css';
import Button from './Button';
import { useState } from 'react';



function App() {

 const [count, setCount] = useState(0);
 const handleIncrease = ()=>{setCount(count+1)}
 const handleDecrease = ()=>{setCount(count-1)}
 const button1Style = {
  color: 'white',
  background: 'red',
};

const button2Style = {
  color: 'white',
  background: 'blue',
};
  return (
    <div className="main">
    
      <div className= "wraper">

      <Button
      onClick={handleIncrease}
      buttonText="increase"
      buttonStyle={button1Style}/>
        <h1>{count}</h1>
      <Button
       onClick={handleDecrease}
       buttonText="decrease" 
       buttonStyle={button2Style}/>
    </div>
       </div>
   );
}

export default App;
