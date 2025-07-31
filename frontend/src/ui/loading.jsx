import { ThreeDots } from "react-loader-spinner";

function Loading({ width = "60", height = "40", color = "#fff" }) {
  return (
    <ThreeDots
      visible={true}
      height={height}
      width={width}
      color={color}
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
