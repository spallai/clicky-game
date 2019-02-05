import React from "react";
import "./style.css";

//pass the image into each card so all 12 are rendered
const FriendCard = props => (
  <div className="card" onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
        {/* { <img alt={props.image}></img>} */}
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default FriendCard;