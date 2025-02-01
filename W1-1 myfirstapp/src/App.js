import logo from './logo.svg';
import './App.css';

function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello world</h1>
      <h2>The time now is {currDate.toLocaleDateString()} {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
