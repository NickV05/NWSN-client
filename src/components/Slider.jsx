import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { get } from "../services/authService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  const [sponsors, setSponsors] = useState([]);

  const getAllProducts = () => {
    get("/sponsors")
      .then((response) => {
        const Arr = response.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((Sponsor) => {
            return Sponsor;
          });
        setSponsors(Arr);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div >
      <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000}>
        {sponsors.map((newSponsor, index) => (
          <Link to={`/product-details/${newSponsor._id}`}>
            <div key={index}>
              <img
                src={newSponsor.image}
                alt={`Slide ${index}`}
              />
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
