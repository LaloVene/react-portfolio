import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import styled from "styled-components";
import Header from "../organisms/Header/Header.organism";

const PageWrapper = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  padding: 1rem;
`;

function PageContainer({children}) {
  return (
    <IonPage>
      <IonContent fullscreen>
      <Header />
        <PageWrapper>{children}</PageWrapper>
      </IonContent>
    </IonPage>
  );
}

export default PageContainer;
