import React from "react";
import { useLocation } from "react-router-dom";

const ViewData = (props) => {
  const location = useLocation();
  const { Row_id,Row_title, Row_body } = location.state;
  // const { abc } = location.state;

  // console.log("from", from);

  return (
    <>
    
      <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
        <div className="card-body">
          <h5 className="card-title">
          <h2>Id</h2>

            {Row_id}</h5>
          <p className="card-text">
            <h2>Title</h2>
          {Row_title}
          
          </p>
          <p className="card-text">
          <h2>Body</h2>

            {Row_body}
          
          </p>
        </div>
      </div>
    </>
  );
};

export default ViewData;
