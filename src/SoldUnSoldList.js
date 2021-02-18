import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
function SoldUnsoldList(props) {
  console.log(props);
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const amountFormatter = (amt) => {
    let amtString = amt.toString();
    //return amtString + "L";
    return amtString.substr(0, amtString.length - 5) + " Lacs";
  };

  return (
    <>
      <button
        onClick={() => setSmShow(true)}
        style={{
          flex: "50%",
          fontSize: "0.3rem",
          width: "50%",
          backgroundColor: "#28a745",
        }}
      >
        S
      </button>
      <button
        onClick={() => setLgShow(true)}
        style={{
          flex: "50%",
          fontSize: "0.3rem",
          width: "50%",
          backgroundColor: "#dc3545",
        }}
      >
        U
      </button>
      <Modal
        size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Sold Players
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ overflow: "scroll" }}>
            <Table striped bordered hover size="sm" variant="dark" >
              <thead >
                <tr>
                  <th>Player Name</th>
                  <th>Team</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody >
                {props.sp.map((p) => {
                  if (!(Object.keys(p).length === 0)) {
                    return (
                      <tr key={p.index}>
                        <td>{p.playerName}</td>
                        <td>{p.team}</td>
                        <td>{amountFormatter(p.salary)}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </Table>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            UnSold Players
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><div style={{ overflow: "scroll" }}>
            <Table striped bordered hover size="sm" variant="dark" >
              <thead >
                <tr>
                  <th>Player Name</th>
                </tr>
              </thead>
              <tbody >
                {props.usp.map((p) => {
                  if (!(Object.keys(p).length === 0)) {
                    return (
                      <tr key={p.index}>
                        <td>{p.playerName}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </Table>
            </div></Modal.Body>
      </Modal>
    </>
  );
}
export default SoldUnsoldList;
