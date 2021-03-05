import { IonText, IonApp, IonHeader, IonContent, IonToolbar, IonTitle, IonInput, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonDatetime } from '@ionic/react';
import React, { useState } from 'react';
// import { play as playIcon } from 'ionicons/icons';
import BiorythmCard from './components/BiorythmCard';

function App() {
  const targetDate = new Date().toISOString();
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  // const [showToast, setShowToast] = useState(false);
  // const handleClick = () => {
  //   setShowToast(true);
  //   setTimeout(() => setShowToast(false), 1500);
  // };
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle color="primary">Bionic Bio-Rhythms</IonTitle>
        </IonToolbar>        
      </IonHeader>
      <IonContent class="ion-padding">
      <IonCard color="dark" class="ion-padding">
        <IonCardHeader class="ion-text-center">
          <IonCardTitle><b>Card Title</b></IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonLabel>Name</IonLabel>
          <IonItem color="medium">
            <IonInput placeholder="Your Name" color="dark" value={name} onIonChange={(event) => setName(event.detail.value)} />
          </IonItem>
          <IonLabel>Birthdate</IonLabel>
          <IonItem color="medium">
           {/* make sure to select md mode for android styles  */}
            <IonDatetime mode="md" value={birthdate} onIonChange={(event) => setBirthdate(event.detail.value)} />            
          </IonItem>
        </IonCardContent>
      </IonCard>
      <BiorythmCard targetDate={targetDate} />
      <IonText color="light">
      <p>Name: {name}</p>
      <p>Birthdate: {birthdate}</p>
      </IonText>
        {/* 
        <IonButton color="primary" onClick={handleClick}>
          <IonIcon icon={playIcon} slot="start" />Click Me!</IonButton>
        <IonToast isOpen={showToast} message="Hello World!" /> */}
      </IonContent>    
    </IonApp>
  );
}
export default App;
