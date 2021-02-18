import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const BidCard = (props) => {
  const {player} = props;
  console.log(props)
return (

<Card
    bg={player.bg}
    text={'white'}
    className="mb-2"
    style={{ height:'71%', width: '95%', margin:'0px 16px 0px 16px', border: 'primary'}}
  >
    <Card.Header>{player.set}</Card.Header>
    <Card.Body>
      <Card.Title style = {{fontSize:'3.7rem'}}>{player.name}</Card.Title>
      <Card.Text>
        <h4>Country : {player.country}</h4>
        <h5>Specialisation : {player.Specialism}</h5>
        <h6>BasePrice : {player.basePrice+'L'}</h6>
        Age : {player.age}<br/>
        Category : {player.category}<br/>
        2020 Team : {player.Team2020}<br/>
        State Association : {player.StateAssociation}<br/>
        Previous IPL Teams : {player.previousTeams}<br/>
        IPL MATCHES PLAYED : {player.iplMatches}<br/>
      </Card.Text>
    </Card.Body>
  </Card>

  )
}
export default BidCard;