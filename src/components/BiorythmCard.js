import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';

function BiorythmCard({ targetDate }) {
    return (
<IonCard color="dark" class="ion-padding">
        <IonCardHeader class="ion-text-center">
          <IonCardTitle><b>{ targetDate }</b></IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          
        </IonCardContent>
      </IonCard>
    );
}

export default BiorythmCard;


        