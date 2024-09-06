import { useState } from "react";
import Modal from "./Modal";

const Button = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className="btn-container">
        <span className="btn" onClick={handleOpen}>
          Create Note
        </span>
        {modalOpen && (
          <div className="modal-overlay">
            <Modal />
          </div>
        )}
      </div>
    </>
  );
};

export default Button;
