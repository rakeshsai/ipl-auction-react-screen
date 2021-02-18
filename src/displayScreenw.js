import React from "react";
import Card from "react-bootstrap/Card";
import './displayScreenw.css'
const DisplayScreenw = (props) => {
  return (
    <div
      className="displayScreenw"
      style={{  width: "100%", height: "9%", borderRadius: '0px'}}
    >
      <Card
        bg={props.bg}
        text={"white"}
        className="mb-2"  
        style={{
          height: "100%",
          width: "100%",
          border: "primary",
          textAlign:"center"
          
        }}
      >
      <h1>{props.textVal}</h1>
      </Card>
      
    </div>
  );
};
export default DisplayScreenw;
