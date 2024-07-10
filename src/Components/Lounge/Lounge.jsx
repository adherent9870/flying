import imageGrid from "../../assets/imageGrid.webp";

const Lounge = () => {
  return (
    <div className="lounge container flex">
      <div className="sectionContainer flex">
        <div className="imgDiv">
          <img src={imageGrid} className="LoungeImg" alt="loungeIMG " />
        </div>

        <div className="textDiv">
          <h3 className="heading">Unaccompanied Minor Lounge</h3>
          <div className="grids flex">
            <div className="twoSingleGrid">
              <div className="singleGrid">
                <span className="gridTitle">Help through the airport</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Harum consectetur, nesciunt ipsam aliquam eius sint aperiam.
                </p>
              </div>

              <div className="singleGrid">
                <span className="gridTitle">Proority Boarding</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Harum consectetur, nesciunt ipsam aliquam eius sint aperiam.
                </p>
              </div>
            </div>

            <div className="twoSingleGrid">
              <div className="singleGrid">
                <span className="gridTitle">Chauffeur-drive service</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Harum consectetur, nesciunt ipsam aliquam eius sint aperiam.
                </p>
              </div>

              <div className="singleGrid">
                <span className="gridTitle">Care on Flight</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Harum consectetur, nesciunt ipsam aliquam eius sint aperiam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
