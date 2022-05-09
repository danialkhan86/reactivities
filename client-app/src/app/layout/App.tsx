import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../models/activity';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashBoad from '../../features/activities/dashboard/ActivityDashboad';


function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity,setSelectedActivity]= useState<Activity | undefined>(undefined);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, [])

  function handelSelectedActivity(id:string)
  {
    setSelectedActivity(activities.find(x=>x.id === id));
  }

  function cancelSelectedActivity(){
    setSelectedActivity(undefined);
  }


  return (
    <div className="App">

      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashBoad activities={activities} 
        selectedActivity={selectedActivity}
        selectActivity={handelSelectedActivity}
        cancelSelectActivity={cancelSelectedActivity}        
        />
      </Container>






    </div>
  );
}

export default App;
