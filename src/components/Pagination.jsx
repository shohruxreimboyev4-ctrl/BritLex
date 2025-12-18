import React from "react";

const Pagination = ({ page, setPage }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        marginTop: 12,
        justifyContent: "center",
      }}
    >
      <button onClick={() => setPage((p) => Math.max(1, p - 1))}>Prev</button>
      <span>Page {page}</span>
      <button onClick={() => setPage((p) => p + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
