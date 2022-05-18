import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashBoad from '../../features/activities/dashboard/ActivityDashboad';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';


function App() {

  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities()
  }, [activityStore])


  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <>

      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashBoad />
      </Container>






    </>
  );
}

export default observer(App);
