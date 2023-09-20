import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';


function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <div className="back">
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
    <img id='firstImage' className="rounded d-block tw-px-0 text-center mx-auto" src='https://media.istockphoto.com/id/1443305526/photo/young-smiling-man-in-headphones-typing-on-laptop-keyboard.webp?b=1&s=612x612&w=0&k=20&c=qoJEy5gsJUj3gpst3iDO5iavYOAZS8_KxDRUAjYlnBM=' text="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img id='firstImage' className="rounded d-block tw-px-0 text-center mx-auto" src='https://media.istockphoto.com/id/1419532732/photo/diversity-in-working-team-using-internet-on-phones-and-digital-tablet-for-teamwork-growth-in.webp?b=1&s=612x612&w=0&k=20&c=PWbQL27aT7woHwQT34m2SGG7nZ4cz64UmCoRY7xWMms=' text="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img id='firstImage' className="rounded d-block tw-px-0 text-center mx-auto" src='https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_640.jpg' text="Third slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  );
}

export default Slider;