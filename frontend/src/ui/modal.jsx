import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

function Modal({ open, close, title, children }) {
  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen z-50 bg-secondary-800 bg-opacity-30">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 bg-white rounded-md shadow-sm  transition-all duration-300 ease-in-out w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto">
          <div className="border-b border-b-secondary-200">
            <div className="p-3 flex justify-between items-center">
              <p className="font-bold">{title}</p>
              <button onClick={close}>
                <IoCloseCircleOutline className="w-6 h-6 text-error" />
              </button>
            </div>
          </div>
          <div className="p-3">{children}</div>
        </div>
      </div>
    )
  );
}

export default Modal;
