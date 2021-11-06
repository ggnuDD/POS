import React from "react";
import {
  ListWrapper,
  ListTitle,
  AdContainer,
  AdContainerRow,
  ListBtn,
  ListTitleRow,
  AdImage,
} from "./homePageElements";

function HomeAdvertisements(props) {
  return (
    <AdContainer style={{backgroundImage: "url(" + "https://img.favpng.com/16/3/12/brick-drawing-clip-art-png-favpng-sxkVD0YL1erTjDQHJcwvHudPG.jpg" + ")", backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
      <AdContainerRow>
        <div className="col">
          <AdImage
            src={props.advertisement1}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="col">
          <AdImage
            src={props.advertisement2}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </AdContainerRow>
      <AdContainerRow>
        <div className="col">
          <img
            src={props.advertisement3}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="col">
          <img
            src={props.advertisement4}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </AdContainerRow>
    </AdContainer>
  );
}

export default HomeAdvertisements;
