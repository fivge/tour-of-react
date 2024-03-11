import React from "react";

export function NetworkErrorMessage({ message, dismiss }) {
  return (
    <div className="alert alert-danger" role="alert">
      chainId不正确: {message?.chainId}
      {/* <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={dismiss}>
        <span aria-hidden="true">&times;</span>
      </button> */}
    </div>
  );
}
