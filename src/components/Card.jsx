import React from "react";
import Avatar from "./Avatar.jsx";
import Details from "./Details.jsx";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Details detailsInfo={props.tel} />
        <Details detailsInfo={props.email} />
      </div>
    </div>
  );
}
export default Card;
