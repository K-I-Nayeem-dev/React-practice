import './App.css';
import Navbar from './components/Navbar';
import TextNodes from './components/TextNodes';
import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react'


function App() {

  const [mode, setMode] = useState('light');
  const [darkText, setdarkText] = useState('Enable Dark Mode');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setdarkText('Enable Light Mode');
      document.body.style.backgroundColor = "black";
      showAlert('Dark Mode Enable', 'success');
    }
    else{
      setMode('light');
      setdarkText('Enable Dark Mode');
      document.body.style.backgroundColor = "white";
      showAlert('Light Mode Enable', 'success');
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      typ : type,
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  return (
    <>
      {/* <Navbar/> */}
      <Navbar title='TextUtils' home='Home' links='Blogs' about='About' search={'Search'} mode={mode} toggleMode={toggleMode} darkText={darkText}/>
      <Alert alert={alert} />
      <TextNodes heading={'Enter the Text to analyze Below'} mode={mode} showAlert={showAlert} />
      <About/>
    </>
  );
}

export default App;
