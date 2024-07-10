import React from "react";

const Subscribers = () => {
  return (
    <div className="subscribe section">
      <div className="sectionContainer container">
        <h3>Subscribe Newsletter and get latest updates.</h3>
        <div className="inputDiv flex">
          <input
            type="text"
            placeholder="Enter your E-mail"
            id="emailAddress"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
