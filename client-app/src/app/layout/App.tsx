import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
const[activities,setActivities]=useState([]);

useEffect(()=>{
  axios.get('http://localhost:5000/api/activities').then(response => {
    console.log(response);
    setActivities(response.data); 
  })
},[])


  return (
    <div className="App">
      <Header as='h2' icon='users' content='Reactivities'></Header>
  
     
      <ul>
        {activities.map((activity:any)=>(
          <li key={activity.id}>{ activity.title }</li>
        ))}
      </ul>
    
    </div>
  );
}

export default App;
