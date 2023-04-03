import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { Svg1, Svg2, Svg3 } from "./HomeSvg";

export default function HomeBanner() {
  useEffect(() => {
    window.jQuery(".myslide").carousel({
      interval: 3000,
    });
  }, []);

  const homeBg = () => {
    return (
      <div className="home-content absolute top-0 flex flex-col items-start p-20 w-1/3">
        <p className="upcoming-heading">Lorem ipsum</p>
        <p className="text-justify text-black">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
        <Button
          className="enr-btn know-more-btn bg-theme "
          sx={{ display: "block" }}
        >
          Know more
        </Button>
      </div>
    );
  };

  return (
    <>
      {/* <div className="container"> */}
      <div
        className="myslide carousel slide"
        id="carousel-example-generic"
        data-ride="carousel"
        data-interval="3000"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            className="active"
          ></li>
          <li
            data-target="#carousel-example-generic"
            data-slide-to="1"
            className=""
          ></li>
          <li
            data-target="#carousel-example-generic"
            data-slide-to="2"
            className=""
          ></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active bg-1 flex ">
            <Svg1 />
          </div>
          <div className="item bg-2">
            <Svg2 />
          </div>
          <div className="item bg-3">
            <Svg3 />
          </div>
        </div>
        {homeBg()}
      </div>
      {/* </div> */}
      {/* <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script> */}
    </>
  );
}
