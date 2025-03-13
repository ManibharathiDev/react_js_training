import logo from './logo.svg';
import './App.css';
import MyApp from './MyApp';
import Sample from './Sample'
import Video from './components/video'
import MyButton from './components/MyButton';
import Conditional from './components/Conditional';

function App() {
  return (
    <>
      <Conditional first="true" second="false"/>
      <Conditional first="false" second="true"/>
      <MyButton/>
      <Video/>
      <MyApp/>
      <Sample myname="Dhanusree" address="CBE" age="25"/>
      <Sample myname="Divya" address="Chennai" age="23"/>
      <Sample myname="Rohit" address="Erode" age="20"/>
    </>
  );
}

export default App;
