import './Main.css';
import 'bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Content from './Content/Content';
import Slider from '../../Components/Slider';
import Card from '../../Components/Card';
export default function Main() {
  function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
    return (
      <div >
        <body>
          <Slider/>
          <div>
            <Content/>
          </div>
         
          
      </body>
      </div>
    );

}