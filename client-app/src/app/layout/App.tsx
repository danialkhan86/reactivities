import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../models/activity';
import { Header, Icon, List, ListItem } from 'semantic-ui-react';
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

      <NavBar></NavBar>
 

  <List>
    {activities.map(activity=>(
      <ListItem key={activity.id}>{activity.title}</ListItem>
    ))}
  </List>


    
    </div>
  );
}

export default App;
