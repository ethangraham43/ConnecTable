import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";
import { useDispatch, useSelector } from "react-redux";
import fetchRestaurants from "../../store/reservations";
import CardItem from "../Card/CardItem";
import { NavLink } from "react-router-dom";

function Carousel({ restaurants }) {
  const dispatch = useDispatch();

  // const restaurants = useSelector((state) =>
  //   state.restaurants ? Object.values(state.restaurants) : []
  // );

  useEffect(() => {
    dispatch(fetchRestaurants);
  }, []);

    return (
      <CarouselProvider
      naturalSlideWidth={125}
      isIntrinsicHeight={true}
      totalSlides={restaurants.length}
      visibleSlides={5}
      step={4}
      dragEnabled={false}
      >
        <ButtonBack>Back</ButtonBack>
        <Slider>
          {restaurants.map((restaurant, index) => {
            return (
            <Slide key={restaurant.id} index={index}>
            <li id="restaurant-card-slides">
              <CardItem restaurant={restaurant} />
            </li>
          </Slide>
            )
          })}
        </Slider>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );

}

export default Carousel;

// const Carousel = ({ slides, interval = 5000 }) => {
//   const [active, setActive] = useState(0);

//   const handleNext = () => setActive((active + 1) % slides.length);
//   const handlePrev = () =>
//     setActive(active === 0 ? slides.length - 1 : active - 1);

//   setTimeout(handleNext, interval);

//   return (
//     <div className="carousel">
//       <div className="carousel-content">
//       {/* <button className="carousel-prev" onClick={handlePrev}>
//         prev
//       </button> */}
//         {slides.map((slide, index) => (
//           <div
//             className={`carousel-item ${active === index ? "active" : ""}`}
//             key={index}
//           >
//             {slide}
//           </div>
//         ))}
//       </div>
//       {/* <button className="carousel-next" onClick={handleNext}>
//       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M8.65685425,9.65685425 L8.65685425,15.1568542 C8.65685425,15.4329966 8.43299662,15.6568542 8.15685425,15.6568542 L7.15685425,15.6568542 C6.88071187,15.6568542 6.65685425,15.4329966 6.65685425,15.1568542 L6.65685425,9.15685425 L6.65685425,8.15685425 C6.65685425,7.88071187 6.88071187,7.65685425 7.15685425,7.65685425 L14.1568542,7.65685425 C14.4329966,7.65685425 14.6568542,7.88071187 14.6568542,8.15685425 L14.6568542,9.15685425 C14.6568542,9.43299662 14.4329966,9.65685425 14.1568542,9.65685425 L8.65685425,9.65685425 Z" fill="#2D333F" transform="translate(10.656854, 11.656854) scale(-1, 1) rotate(-45.000000) translate(-10.656854, -11.656854)"></path></g></svg>
//       </button> */}
//     </div>
//   );
// };

// export default Carousel;
