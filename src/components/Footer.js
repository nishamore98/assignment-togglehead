import React from "react";
import {
  ClockSvg,
  FbSvg,
  InstaSvg,
  LinkedInSvg,
  LocationSvg,
  QuoraSvg,
  TrainSvg,
  TwitterSvg,
  UtubeSvg,
} from "./FooterSvg";

export default function Footer() {
  return (
    <div className="flex justify-between align-left p-14 text-white bg-theme">
      <div className="text-left">
        <h1 className="text-3xl font-medium">Contact us</h1>
        <p className="mt-4">
          Address : amet,consetetur sadipscing elitr,sed diam.
        </p>
        <p className="mt-2">Email id: example@gmail.com</p>
        <p className="mt-2">phone: 1234567890</p>
      </div>
      <div className="text-center  w-1/3">
        <h1 className="text-3xl font-medium">Follow us</h1>
        <div className="flex mt-4 justify-around items-center">
          <FbSvg />
          <LinkedInSvg />
          <InstaSvg />
          <TwitterSvg />
          <UtubeSvg />
          <QuoraSvg />
        </div>
      </div>
      <div className="text-left">
        <h1 className="text-3xl font-medium">Head office</h1>
        <div className="flex mt-4 items-center ">
          <LocationSvg />
          <p className="ml-2 ">
            Lorem ipsum is typically a corrupted version of De
          </p>
        </div>
        <div className="flex mt-2 items-center">
          <ClockSvg />
          <p className="ml-2">
            Lorem ipsum is typically a corrupted version of De
          </p>
        </div>
        <div className="flex mt-2 items-center">
          <ClockSvg />
          <p className="ml-2">
            Lorem ipsum is typically a corrupted version of De
          </p>
        </div>
        <div className="flex mt-2 items-center">
          <TrainSvg />
          <p className="ml-2">Lorem ipsum is typically a</p>
        </div>
      </div>
    </div>
  );
}
