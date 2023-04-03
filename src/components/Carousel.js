import React, { useState, useEffect, forwardRef } from "react";
const mockData = [
  {
    headline: "Loren ipsum",
    knowMoreLink: "Know More",
    description:
      " Lorem ipsum is a placeholder text commonly used to demonstrate ",
  },
  {
    headline: "Loren ipsum",
    knowMoreLink: "Know More",
    description:
      " Lorem ipsum is a placeholder text commonly used to demonstrate ",
  },
  {
    headline: "Loren ipsum",
    knowMoreLink: "Know More",
    description:
      " Lorem ipsum is a placeholder text commonly used to demonstrate ",
  },
  {
    headline: "Loren ipsum",
    knowMoreLink: "Know More",
    description:
      " Lorem ipsum is a placeholder text commonly used to demonstrate ",
  },
  {
    headline: "Loren ipsum",
    knowMoreLink: "Know More",
    description:
      " Lorem ipsum is a placeholder text commonly used to demonstrate ",
  },
];

const ForwardedCarousel = ({ forwardedRef }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(mockData);
  }, []);

  return (
    <section className="carouselContainer" ref={forwardedRef}>
      {mockData.map((item, index) => {
        return (
          <div key={index} className="carousel-item text-white bg-theme p-12 ">
            <div className="font-semibold">{item.headline}</div>
            <div className="mt-4">{item.description}</div>
            <div className="flex mt-4 items-end">
              <button className="know-btn">{item.knowMoreLink}</button>
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Arrow / Caret_Circle_Right">
                  <path
                    id="Vector"
                    d="M11 9L14 12L11 15M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
                    stroke="#134070"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
        );
      })}
    </section>
  );
};

const Carousel = forwardRef((props, ref) => {
  return <ForwardedCarousel {...props} forwardedRef={ref} />;
});

export default Carousel;
