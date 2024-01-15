import { useState, useEffect } from "react";
import { get } from "../services/authService";

const SliderMembers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const quotes = [
    {
      Name: "Women’s Lunch",
      Quote:
        "As a center of collaboration, Women’s Lunch Place immediately recognized the value of networking with other women serving shelters to leverage the expertise...",
    },
    {
      Name: "Downtown Women’s Center",
      Quote: "The only time we have seen a decrease in homelessness is when we focus on the unique needs of subpopulations. There has  been no greater evidence of this than ...",
    },
    {
      Name: "The Delores Project ",
      Quote: "As one very few secular homeless service organizations in the Denver-Metro region prioritizing a high level of hospitality and inclusivity within our programs...",
    },
    {
      Name: "YWCA USA",
      Quote: "f transforming the trauma of shelter into a window of opportunity is at the heart of your work, then the National Women’s Shelter Network is your community...",
    },
    {
      Name: "Union Gospel Mission Twin Cities",
      Quote: "As Union Gospel Mission Twin Cities aims to increase our response to the growing numbers of women and children facing homelessness in the Twin Cities...",
    },
    {
      Name: "Atlanta Mission",
      Quote: "Atlanta Mission is enthusiastic about embarking on a meaningful journey with the National Women’s Shelter Network! The chance to unite our efforts...",
    },
    {
      Name: "Thomas House Family Shelter",
      Quote: "At Thomas House Family Shelter, our mission is to eliminate the cycle of poverty and homelessness for future generations. We achieve this by offering ...",
    },
    {
      Name: "The Haven of Grace",
      Quote: "Missouri's high ranking in maternal and infant mortality is a concerning issue, especially for African Americans where the percentage doubles...",
    },
    {
      Name: "Rose Haven",
      Quote: "Portland, Oregon has one of the highest rates of unsheltered people in the country. As the only day shelter in downtown serving women, children...",
    }
  ];

  useEffect(() => {
    if (quotes.length) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 4000);

      return () => clearInterval(intervalId);
    }
  }, [quotes]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="carousel-content"
          style={{
            width: `${50 * quotes.length}%`, 
            transform: `translateX(-${(currentIndex * (100 / quotes.length))}%)`,
            transition: "transform 0.5s ease-in-out",
            overflow: "hidden", 
          }}
        >
          {quotes.map((item, index) => (
            <div key={index} style={{ width: `${100 / quotes.length}%` }}>
              <h4>{item.Name}</h4>
              <p>{item.Quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderMembers;
