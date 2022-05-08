import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../models/activity';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashBoad from '../../features/activities/dashboard/ActivityDashboad';


function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, [])


  return (
    <div className="App">

      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashBoad activities={activities} />


      </Container>






    </div>
  );
}

export default App;
