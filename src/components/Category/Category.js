import * as React from "react";
// import "../../styles/global.scss";
// import "./Category.scss";

const category = ({ categoryName }) => {
  return (
    <div className="category-container">
      <p className="category-container__highlight">{categoryName}</p>
    </div>
  );
};

export default category;
