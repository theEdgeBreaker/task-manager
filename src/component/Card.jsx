import { useState } from "react";

function Card({ handleClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Todo");
  const [priority, setPriority] = useState("Low");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const getCardBackgroundColor = () => {
    switch (status) {
      case "In-progress":
        return "#b3d7ff";
      case "Done":
        return "#adde86";
      default:
        return "#dcdcdc";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Title: ", title);
    console.log("Description: ", description);
    console.log("Status: ", status);

    handleClose();
    setTitle("");
    setDescription("");
    setStatus("Todo");
  };

  return (
    <div className="card" style={{ backgroundColor: getCardBackgroundColor() }}>
      <button className="close-button" onClick={handleClose}>
        &#x2715;
      </button>
      <form className="card-content" onClick={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter title here..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            placeholder="Put your description here..."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <div className="card-status">
          <label>Status</label>
          <select value={status} onChange={handleStatusChange}>
            <option>Todo</option>
            <option>In-progress</option>
            <option>Done</option>
          </select>
        </div>

        <div className="">
          <label>Priority</label>
          <select value={priority} onChange={handlePriorityChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
}

export default Card;
