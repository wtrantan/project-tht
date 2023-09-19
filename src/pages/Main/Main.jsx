import './Main.css';
import 'bootstrap';
export default function Main() {
    function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
    return (
        <body>
        <header>
          <div id="brand"><a href="/">Tiny Health Tales</a></div>
          
          <nav>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/stories">Stories</a></li>
              <li><a href="/about">About Us</a></li>
              
            </ul>
          </nav>
          <div id="hamburger-icon" onClick={() => toggleMobileMenu(this)}>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <ul class="mobile-menu">
              <li><a href="/home">Home</a></li>
              <li><a href="/stories">Stories</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          </header>

      </body>
    );

}