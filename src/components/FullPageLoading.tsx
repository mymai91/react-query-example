import React, { memo } from "react";
import ReactLoading from "react-loading";

const FullPageLoading: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <ReactLoading color="rgb(53, 126, 221)" type="spin" />
    </div>
  );
};

export const LoadingBar = ({ height }: any) => {
  height = height || "100px";
  return (
    <div
      style={{
        height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <ReactLoading color="rgb(53, 126, 221)" type="spin" />
    </div>
  );
};

export default memo(FullPageLoading);
