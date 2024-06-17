import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loading({ width = "60", height = "40" }) {
  return (
    <ThreeDots
      visible={true}
      height={height}
      width={width}
      color="#fff"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
}

export default Loading;
