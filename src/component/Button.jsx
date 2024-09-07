import { useState } from "react";
import Modal from "./Modal";

const Button = ({ addNote }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="btn-container">
        <span className="btn" onClick={handleOpen}>
          Create Note
        </span>
        {modalOpen && (
          <div className="modal-overlay">
            <Modal handleClose={handleClose} addNote={addNote} />
          </div>
        )}
      </div>
    </>
  );
};

export default Button;
