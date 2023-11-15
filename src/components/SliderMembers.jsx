import { useState, useEffect } from 'react';
import {get} from "../services/authService"

const SliderMembers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sponsors, setSponsors] = useState([]);

  const getAllSponsors = () => {
    get("/home/sponsors")
      .then((response) => {
        const sortedSponsors = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setSponsors(sortedSponsors);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllSponsors();
  }, []);

  useEffect(() => {
    if (sponsors.length) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (sponsors.length / 4));
      }, 4000);

      return () => clearInterval(intervalId); 
    }
  }, [sponsors]);



  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="carousel-content"
          style={{
            transform: `translateX(-${currentIndex * (100 / sponsors.length)}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {sponsors.map((item, index) => (
            <div key={index}>
              <img className='item' src={item.image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderMembers;
