import { Fragment } from "react";

function MeetupDetails({ image, title, address, description }) {
  return (
    <Fragment>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </Fragment>
  );
}

export default MeetupDetails;
