import './App.css';
import Navbar from './components/Navbar';
import TextNodes from './components/TextNodes';

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Navbar title='TextUtils' home='Home' links='Blogs' about='About' search={'Search'} />
      <TextNodes heading={'Enter the Text to analyze Below'}/>

    </>
  );
}

export default App;
