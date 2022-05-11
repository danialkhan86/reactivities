import React, { useEffect, useState } from 'react';
import { Activity } from '../models/activity';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashBoad from '../../features/activities/dashboard/ActivityDashboad';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';


function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity,setSelectedActivity]= useState<Activity | undefined>(undefined);
  const[editMode,setEditMode]=useState(false);
  const[loading, setLoading]=useState(true);
  const[submitting,setSubmitting]=useState(false);

  useEffect(() => {
    agent.Activities.list().then(response=>{
      let activities: Activity []=[];
      response.forEach(activity => {
        activity.date=activity.date.split('T')[0];
        activities.push(activity);
      })
      setActivities(activities);
      setLoading(false);
    // axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
    //   console.log(response);
    //   setActivities(response.data);
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
    setSubmitting(true);
    if(activity.id)
    {
      agent.Activities.update(activity).then(()=>{
        setActivities([...activities.filter(x=>x.id !== activity.id),activity])
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);

      });
    }
    else{
      activity.id=uuid();
      agent.Activities.create(activity).then(()=>{
        setActivities([...activities,activity])
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      })

    }
   
  }

  function handleDeleteActivity(id:string)
  {
    setActivities([...activities.filter(x=>x.id !== id)])
  }

  if(loading) return <LoadingComponent content='Loading app' />

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
