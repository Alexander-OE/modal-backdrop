import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

function closeModaleHandler() {
    setModalIsOpen(false);
}

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModaleHandler} onConfirm={closeModaleHandler} />}
      {modalIsOpen && <Backdrop onCancel={closeModaleHandler}/>}
    </div>
  );
};

export default Todo;
