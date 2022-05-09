import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../models/activity';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashBoad from '../../features/activities/dashboard/ActivityDashboad';
import {v4 as uuid} from 'uuid';


function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity,setSelectedActivity]= useState<Activity | undefined>(undefined);
  const[editMode,setEditMode]=useState(false);

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

  function handleOpenForm(id?: string){
    id ? handelSelectedActivity(id):cancelSelectedActivity();
    setEditMode(true);
  }

  function handleCloseForm()
  {
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity : Activity)
  {
    activity.id ? setActivities([...activities.filter(x=>x.id !== activity.id),activity]) : setActivities([...activities,{...activity, id :uuid()}]);
    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id:string)
  {
    setActivities([...activities.filter(x=>x.id !== id)])
  }


  return (
    <>

      <NavBar openForm={handleOpenForm} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashBoad activities={activities} 
        selectedActivity={selectedActivity}
        selectActivity={handelSelectedActivity}
        cancelSelectActivity={cancelSelectedActivity}   
        editMode={editMode}     
        openForm={handleOpenForm}
        closeForm={handleCloseForm}
        createOrEdit={handleCreateOrEditActivity}
        deleteActivity={handleDeleteActivity}
        />
      </Container>






    </>
  );
}

export default App;
