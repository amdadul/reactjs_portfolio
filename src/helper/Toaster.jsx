import React, { useEffect, useState } from "react";

const Toaster = ({message, type}) => {
    const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      {show && (
        <div
          className={`toast show align-items-center text-bg-${type} border-0 position-fixed bottom-0 end-0 p-3`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style={{ zIndex: 1000 }}
        >
          <div className="d-flex">
            <div className="toast-body">{message}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toaster;
