import React from "react";

export default function GrayServiesSection() {
  const mockData = [
    {
      title1: "Lorem ipsum",
      heading: "123+",
      title2: "Lorem ipsum",
      desc: "Lorem ipsum is typically a corrupted version of De finibus bonorum malorum, a 1st-century BC text by the.",
    },
    {
      title1: "Lorem ipsum",
      heading: "12+",
      title2: "Lorem ipsum",
      desc: "Lorem ipsum is   typically a corrupted versio n typically a corrupted versio n typically a corrupted versio n  of De finibus bonor um malorum, a 1st-century BC text by the.",
    },
    {
      title1: "Lorem ipsum",
      heading: "12+",
      title2: "Lorem ipsum",
      desc: "Lorem ipsum is typically a  corrupted version of D e finibus bonorum malorum, finibus bonorum malorum, finibus bonorum malorum,  a 1st-century BC text by the.",
    },
    {
      title1: "Lorem ipsum",
      heading: "123",
      title2: "Lorem ipsum",
      desc: "Lorem ipsum is typically a corrupted version of De finibus bonorum malorum, a 1st-century BC text by the.",
    },
  ];
  return (
    <div className="p-14  bg-slate-50  flex justify-around">
      {mockData.map((item, i) => {
        return (
          <div key={i} className="w-1/5  text-left">
            <h2 className="font-medium">{item.title1}</h2>
            <h1 className="upcoming-heading mt-4">{item.heading}</h1>
            <h2 className="font-semibold mt-3">{item.title2}</h2>
            <p className="mt-3">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
