import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../Carousel/Carousel';
import CardItem from './CardItem';
import { useReducer } from 'react';

function CardList({ cuisine }) {
    const initialState = {
        activeIndex: 0
      };
      
      const reducer = (state, action) => {
        switch (action.type) {
          case 'NEXT':
            return {
              ...state,
              activeIndex: (state.activeIndex + 1) % action.numSlides
            };
          case 'PREV':
            return {
              ...state,
              activeIndex: state.activeIndex === 0
                ? action.numSlides - 1
                : state.activeIndex - 1
            };
          case 'GO_TO':
            return {
              ...state,
              activeIndex: action.index
            };
          default:
            return state;
        }
      };
  const restaurants = useSelector(({ restaurants }) => {
    return Object.values(restaurants).filter(restaurant => {
      return restaurant.cuisine === cuisine;
    });
  });

  const slides = restaurants.map(restaurant => (
    <div key={restaurant.id}>
      <CardItem restaurant={restaurant}/>
    </div>
  ));

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2 className="cuisine-header">{cuisine} Dining</h2>
      <Carousel restaurants={restaurants} dispatch={dispatch} state={state} />
    </>
  );
}

export default CardList;

