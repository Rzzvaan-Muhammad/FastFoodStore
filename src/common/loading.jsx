import React from "react";

const Loading = () => {
  return (
    <div>
      Please Wait! Loading...
      <div className="spinner-border spinner-border-sm text-muted ml-2" />
      <div className="spinner-border spinner-border-sm text-muted" />
      <div className="spinner-border spinner-border-sm text-muted" />
    </div>
  );
};

export default Loading;
