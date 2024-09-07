import Card from "./Card";

function Modal({ handleClose }) {
  return (
    <div>
      <Card handleClose={handleClose} />
    </div>
  );
}

export default Modal;
