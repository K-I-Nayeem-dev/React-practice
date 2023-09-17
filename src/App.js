import './App.css';
import Navbar from './components/Navbar';
import TextNodes from './components/TextNodes';
import About from './components/About';
import React,{useState} from 'react'


function App() {

  const [mode, setMode] = useState('light');
  const [darkText, setdarkText] = useState('Enable Dark Mode');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setdarkText('Enable Light Mode');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setMode('light');
      setdarkText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>
      {/* <Navbar/> */}
      <Navbar title='TextUtils' home='Home' links='Blogs' about='About' search={'Search'} mode={mode} toggleMode={toggleMode} darkText={darkText}/>

      <TextNodes heading={'Enter the Text to analyze Below'} mode={mode}/>

      <About/>

    </>
  );
}

export default App;
