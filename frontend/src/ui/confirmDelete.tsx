import React from "react";

function ConfirmDelete({ resourceName, onClose, onConfirm, disabled }) {
  return (
    <>
      <div className="text-center my-5 font-bold text-md">
        آیا از حذف {resourceName} اطمینان دارید؟
      </div>
      <div className="flex items-center justify-between">
        <button
          className="btn btn--primary"
          onClick={onClose}
          disabled={disabled}
        >
          لغو
        </button>
        <button
          className="btn bg-rose-500 px-5 py-3"
          onClick={onConfirm}
          disabled={disabled}
        >
          تایید
        </button>
      </div>
    </>
  );
}

export default ConfirmDelete;
