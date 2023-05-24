import logo from './logo.svg';
import './App.css';

import First from './components/First';
import Navbar from './components/Navbar';
import Sb from './components/Sb';
import HW from './components/HW';
import { Route,Routes } from 'react-router-dom';
import Table1 from './components/Table1';
import Apiget from './components/Apiget';

function App() {
  return (
    <div className="App">
    {/* <First/> */}
    <Navbar/>
    {/* <Sb/> */}
     {/* <HW/> */}
     {/* <Table1/> */}
     <Routes>
        <Route path='/'element={<Sb/>}/>
       <Route path='/first'element={<First/>}/>
       <Route path='/table'element={<Table1/>}/>
        <Route path='/hw'element={<HW/>}/>
        <Route path='/api'element={<Apiget/>}/>

     </Routes>


    </div>
  );
}

export default App;
