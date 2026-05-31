import React from "react";
import BackgroundCard from "../molecules/BackgroundCard.molecule";
import Data from "../../assets/data/background.json";

function Background() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
      <div>
        <BackgroundCard type="Work" data={Data.work} />
      </div>
      <div>
        <BackgroundCard type="Education" data={Data.education} />
      </div>
    </div>
  );
}

export default Background;
