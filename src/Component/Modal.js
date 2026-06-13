import React from "react";

function Modal({ children, setOpen }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        zIndex: 1,
      }}
    >
      <div>{children}</div>
      <div>
        <button onClick={() => setOpen(false)}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
