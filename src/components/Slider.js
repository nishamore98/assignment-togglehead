import React, { useRef } from "react";
import Carousel from "./Carousel";
export default function Slider() {
  const ref = useRef(null);

  const prev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current.children[0]).width
      );
      ref.current.scrollLeft = scrollLeft - itemWidth * 3;
    });
  };

  const next = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current.children[0]).width
      );
      ref.current.scrollLeft = scrollLeft + itemWidth * 3;
    });
  };
  return (
    <>
      <div className="flex">
        <Carousel ref={ref} />
      </div>
    </>
  );
}
