import React from "react";

const UpcomingExamination = () => {
  const ScheduleSvg = () => {
    return (
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 64 64"
        strokeWidth="3"
        stroke="#000000"
        fill="none"
      >
        <path d="M36.66,54.45H8.84A2.5,2.5,0,0,1,6.35,52V12.12A2.49,2.49,0,0,1,8.84,9.63H48.68a2.49,2.49,0,0,1,2.49,2.49v22.4" />
        <line x1="6.35" y1="20.63" x2="51.17" y2="20.63" />
        <line x1="16.46" y1="9.63" x2="16.46" y2="4.63" />
        <line x1="40.42" y1="9.63" x2="40.42" y2="4.63" />
        <circle cx="45.22" cy="45.44" r="12.43" />
        <polyline points="45.22 36.7 45.22 45.82 49.57 49.16" />
      </svg>
    );
  };
  const schedule = [
    { date: "02th October 2014", level: "Level 1 exam" },
    { date: "Nov-Dec 2016", level: "Level 2 exam" },
    { date: "02th October 2014", level: "Level 3 (Grad)" },
  ];
  return (
    <div className="p-14 flex justify-around">
      <div className="upcoming-heading-container p-8 flex flex-col text-start items-start">
        <h1 className="upcoming-heading">Upcoming Examination</h1>
        <p>Enquire about the examination & register for the exam</p>
      </div>
      <div className="flex w-full">
        {schedule.map((item, index) => {
          return (
            <div key={index} className="p-8  mx-8 flex text-start items-start">
              {ScheduleSvg()}
              <div className="ml-4">
                <h1 className="schedule-heading font-semibold">{item.date}</h1>
                <p>{item.level}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UpcomingExamination;
