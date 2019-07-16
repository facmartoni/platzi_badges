import React from "react";
import "./styles/PageLoading.css";

export default function PageError(props) {
  return (
    <div className="PageLoading">
      <h3>😱{props.error.message}😱</h3>
    </div>
  );
}
