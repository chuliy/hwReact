import './App.css';
import { useState } from 'react';

function App(props) {
  let [date,setDate] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>setDate(true)}>Get current date</button>
        <div>
          {date?<p>{props.now.toString()}</p>:null}
        </div>
      </header>
    </div>
  );
}

export default App;
