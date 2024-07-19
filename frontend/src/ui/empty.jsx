import React from "react";

function empty({ resourceName }) {
  return (
    <div className="text-center font-bold text-sm text-secondary-500">
      {resourceName} برای نمایش وجود ندارد!
    </div>
  );
}

export default empty;
