import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const accordionData = [
    {
      que: "How does an investor gain access to MF Utility?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      que: "Will investor be able to have multiple Common Account Numbers?",
      ans: " Lorem ipsum dolor sit amet, consectetur adipisci Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      que: "How does an investor gain access to Mf Utility?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuadaadipi orem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuadaadipi scing elit.Suspendisse malesuada adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];
  return (
    <div className="p-14 mt-8 grid place-items-center">
      <h1 className="upcoming-heading">FAQ</h1>
      <div className=" mt-12 text-lg">
        {accordionData.map((item, index) => {
          return (
            <Accordion key={index} className="accordion-wrapper">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{item.que}</Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-ans">
                <Typography>{item.ans}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
