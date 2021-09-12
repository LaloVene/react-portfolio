import React from "react";
import { IonRow, IonCol } from "@ionic/react";
import BackgroundCard from "../../molecules/BackgroundCard/BackgroundCard.molecule";
import Data from "../../../assets/data/background.json";


function Background() {
  return (
    <IonRow>
      <IonCol size="12" sizeLg="6">
        <BackgroundCard type="Work" data={Data.work}/>
      </IonCol>
      <IonCol size="12" sizeLg="6">
        <BackgroundCard type="Education" data={Data.education}/>
      </IonCol>
    </IonRow>
  );
}

export default Background;
