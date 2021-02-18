import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Capturer from "./Capturerr.PNG";
import './TopBuy.css';

const TopBuys = (props) => {

  const amountFormatter = (amt) => {
    let amtString = amt.toString();
    //return amtString + "L";
    return amtString.substr(0, amtString.length - 5) + " Lacs";
  };
  return (
    <Carousel
      style={{
        backgroundColor: "dark",
        height: "25%",
        width: "95%",
        margin: "0px 16px 0px 16px",
        border: "primary",
      }}
    >
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={Capturer} alt="Third slide" />
        <Carousel.Caption>
          <h3>Deals of the Day</h3>
          <p>
            Watch out the players sold today.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      {props.tpb.map((p) => {
        if (!(Object.keys(p).length === 0)){
        return (
          <Carousel.Item  key = {p.index}>
            
            <img className="d-block w-100" src={Capturer} alt="Third slide" />
            <Carousel.Caption>
              <h3>{p.playerName}</h3>
              <h5>{p.playerTeam}</h5>
              <h6>{amountFormatter(p.playerSalary)}</h6>
            </Carousel.Caption>
          </Carousel.Item>
        );
        }
      })}
    </Carousel>
  );
};
export default TopBuys;
