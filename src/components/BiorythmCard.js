import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';
import dayjs from 'dayjs';

function formatDate(isoString) {
    return dayjs(isoString).format('dddd - MMMM D, YYYY');
}

function BiorythmCard({ targetDate }) {
    return (
<IonCard color="dark" class="ion-padding">
        <IonCardHeader class="ion-text-center">
          <IonCardTitle><b>{ formatDate(targetDate) }</b></IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          
        </IonCardContent>
      </IonCard>
    );
}

export default BiorythmCard;

// physical: sin(2pi.t/23)
// emotional: sin(2pi.t/28)
// intellectual: sin(2pi.t/33)
        