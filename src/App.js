import logo from './logo.svg';
import './App.css';
import MyApp from './MyApp';
import Sample from './Sample';

function App() {
  return (
    <>
      <MyApp/>
      <Sample myname="Dhanusree" address="CBE" age="25"/>
      <Sample myname="Divya" address="Chennai" age="23"/>
      <Sample myname="Rohit" address="Erode" age="20"/>
    </>
  );
}

export default App;
