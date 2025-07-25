import React, { useReducer, useEffect } from "react";
import { list } from "../data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import reducer from "./hooks/reducer";
import { NEXT, PREV } from "./actions";

const defaultState = {
  people: list,
  currentPerson: 0,
};

const Carousel = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    const slider = setTimeout(() => {
      dispatch({ type: NEXT });
    }, 4000);
    return () => clearTimeout(slider);
  }, [state.currentPerson]);

  return (
    <section className="slider-container">
      {state.people.map(({ id, image, name, title, quote }, personIndex) => {
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${
                100 * (personIndex - state.currentPerson)
              }%)`,
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}

      <button
        type="button"
        className="prev"
        onClick={() => dispatch({ type: PREV })}
      >
        <FiChevronLeft />
      </button>
      <button
        type="button"
        className="next"
        onClick={() => dispatch({ type: NEXT })}
      >
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
