import { useState, useEffect } from 'react';

const useCarousel = (length, interval = 5000) => {
  const [state, dispatch] = useState({
    active: 0,
    desired: 0,
    offset: 0,
    transitioning: false
  });
  const transitionTime = 400;
  const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
  const smooth = `transform ${transitionTime}ms ease`;

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: "next", length }), interval);
    return () => clearTimeout(id);
  }, [state.offset, state.active]);

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: "done" }), transitionTime);
    return () => clearTimeout(id);
  }, [state.desired]);

  return [
    state.active,
    (index) => dispatch({ type: "click", index }),
    {
      style: {
        transform: `translateX(${state.offset}%)`,
        transition: state.transitioning ? elastic : smooth,
      },
    },
    { length, transitionTime },
  ];
};

export default useCarousel;
