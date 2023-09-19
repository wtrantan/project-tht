import './App.css';
import Main from './pages/Main/Main';
import Contacts from './pages/Contacts/Contacts'
import 'bootstrap';
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/Contacts" element={<Contacts/>}/>
  </Routes>
  );
}

export default App;
