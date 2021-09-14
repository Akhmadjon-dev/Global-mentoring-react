import React from 'react';
import HelloWorld from './Components/HelloWorld';
import Title from './Components/Title';
import { Counter } from './Containers/Counter';


function App() {
  return (
    <div className="App">
      {Title}
      <HelloWorld/>
      <Counter/>
    </div> 
  ); 
} 

export default App;
