import './Main.css';
import 'bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Content from './Content/Content';
export default function Main() {
  function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
    return (
      <div >
        <body className="background">
        
          <div>
            <Content/>
          </div>
         
          
      </body>
      </div>
    );

}