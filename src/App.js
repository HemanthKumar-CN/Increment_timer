import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import Increment_timer from './Increment_timer';
import Optimized_timer from './Optimized_timer';

function App() {
  return (
    <div className="App">
      <Timer/>
      <hr/>
      <Increment_timer/>
      <hr/>
      <Optimized_timer/>
    </div>
  );
}

export default App;
