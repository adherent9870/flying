import React from "react";
import video from "../../assets/video.mp4";
import aeroplane from "../../assets/aeroplane.webp";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">
          Create Everlasting Memories With Us
        </h1>
      </div>
      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>
        <img
          data-aos="fade-left"
          data-aos-duration="2500"
          src={aeroplane}
          className="plane"
          alt="plane"
        />
      </div>
    </div>
  );
};

export default Home;
