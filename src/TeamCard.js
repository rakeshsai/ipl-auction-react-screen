import React from "react";
import "./TeamCard.css";

const TeamCard = (props) => {
  console.log(props);
  const { name, budgetLeft, players, bidAmt } = props;
  if (props.faceFlag) {
    return (
      <div className="card-grid">
        <div className="cardA" style={props.style}>
          <div  className="face1up">
            <p style = {{flex: '50%',textAlign: 'left',filter:''}}>{name}</p>
            <div style = {{fontSize:'20px', display:'flex', flexDirection:'column', flex: '50%'}}>
            <p style = {{flex: '50%',filter:''}}>BUDGET LEFT: {budgetLeft}</p>
            <p style = {{flex: '50%',filter:''}}>PLAYERS: {players}/25</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-grid">
        <div className="cardA" style={props.style}>
          <div className="face1down">
            <p style = {{flex: '50%',textAlign: 'left'}}>{name}</p>
            <p style = {{flex: '50%',textAlign: 'right',fontFamily: 'Jost, sans-serif', fontWeight:'600'}}>{bidAmt}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default TeamCard;
