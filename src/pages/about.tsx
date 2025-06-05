import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonChip,
  IonGrid,
  IonRow,
  IonCol,
  IonText
} from '@ionic/react';

import {
  buildOutline,
  laptopOutline,
  cloudOutline,
  hardwareChipOutline,
  constructOutline,
  rocketOutline,
  shieldCheckmarkOutline,
  bookOutline
} from 'ionicons/icons';

const About: React.FC = () => {
  const topics = [
    { title: 'My name is John Rushel L. Hinoyog' },
    { title: 'I am 24 years old' },
    { title: 'I am a 3rd year collage at nbsc' },
    { title: 'I live in tankulan manulo fortich bukidnon' },
    {title: 'I' },
    { title: 'Deployment & Maintenance', icon: rocketOutline, description: 'Apps are published to stores or servers, then maintained with regular updates and patches.' }
  ];

  const skills = [''];

  const resources = [
    { name: '' },
    { name: '' },
    { name: 'SDLC Explained', link: 'https://www.ibm.com/topics/software-development-life-cycle' }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About App Development</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">

        {/* Core Topics */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={hardwareChipOutline} className="ion-margin-end" />
              Core Topics in Application Development
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                {topics.map((item, index) => (
                  <IonCol size="12" sizeMd="6" key={index}>
                    <IonItem lines="none">
                      <IonIcon icon={item.icon} slot="start" color="primary" />
                      <IonLabel>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                      </IonLabel>
                    </IonItem>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        {/* Key Skills */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>My Skills</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skills.map((skill, index) => (
                <IonChip key={index} color="tertiary">{skill}</IonChip>
              ))}
            </div>
          </IonCardContent>
        </IonCard>

        {/* Learning Resources */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={bookOutline} className="ion-margin-end" />
              Learning Resources
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {resources.map((res, index) => (
                <IonItem
                  key={index}
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  detail={true}
                >
                  <IonLabel>
                    <h2>{res.name}</h2>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default About;