import './App.css';
import Main from './pages/Main/Main';
import Contacts from './pages/Contacts/Contacts';
import Stories from './pages/Stories/Stories';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap';
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <div><Navbar/>
    <Routes>
    <Route path="/" element={<Main/>}/>
    //<Route path="/Stories" element={<Stories/>}/>
    <Route path="/Contacts" element={<Contacts/>}/>
  </Routes>
  </div>
  );
}

export default App;
