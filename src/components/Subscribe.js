import React, { useState } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const openModal = () => {
    if (email.length) {
      setShowModal(true);
    }
  };
  const style = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "background.paper",
    border: "2px solid #134070",
    borderRadius: "5px",
    textAlign: "center",
    p: 4,
  };
  return (
    <div className="sub-container p-14 flex justify-between">
      <div className=" w-1/2 p-8 flex flex-col text-start items-start">
        <h1 className="upcoming-heading">Subscribe</h1>
        <p className="text-black mt-8">
          Lorem ipsum dolor sit amet, consectetur adipisci Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit
          amet eget.
        </p>
        <div className="w-full flex mt-8">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => handelEmail(e)}
            className="email-innput mr-6"
          />
          <Button
            onClick={openModal}
            className="enr-btn know-more-btn block bg-theme "
          >
            Subscribe Now
          </Button>
        </div>
      </div>
      {showModal && (
        <div>
          <Modal
            open={showModal}
            // onClose={() => setShowModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="absolute">
              <h1
                id="modal-modal-title"
                className="text-2xl mb-6 font-extrabold "
              >
                Please check your mails. If you did not receive mail, please
                contact our team.
              </h1>
              {/* <div className=" "> */}
              {/* <Button
                  onClick={openModal}
                  className="enr-btn mr-4 cancle-btn block border border-indigo-600  "
                >
                  Cancel
                </Button> */}
              <Button
                onClick={() => {
                  setShowModal(false);
                  setEmail("");
                }}
                className="enr-btn know-more-btn block bg-theme "
              >
                Okay
              </Button>
              {/* </div> */}
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
}
