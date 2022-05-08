import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../models/activity';
import { Container, Header, Icon, List, ListItem } from 'semantic-ui-react';
import NavBar from './NavBar';


function App() {
const[activities,setActivities]=useState<Activity[]>([]);

useEffect(()=>{
  axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
    console.log(response);
    setActivities(response.data); 
  })
},[])


  return (
    <div className="App">

      <NavBar />
      <Container style={{ marginTop:'7em' }}>
      <List>
    {activities.map(activity=>(
      <List.Item key={activity.id}>
        {activity.title}
      </List.Item>
    ))}
        </List>

      </Container>
 




    
    </div>
  );
}

export default App;
