import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetail from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props{
  activities:Activity[];
  selectedActivity:Activity | undefined;
  selectActivity : (id:string) => void;
  cancelSelectActivity : ()=>void;
}

export default function ActivityDashBoad({activities,selectedActivity,selectActivity,cancelSelectActivity}:Props) {
  return (

    <Grid>
      <GridColumn width='10'>
        <ActivityList activities={activities} selectActivity={selectActivity} />

      </GridColumn>
      <GridColumn width='6'>
        { selectedActivity && 
        <ActivityDetail activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} />}
        <ActivityForm />

      </GridColumn>
    </Grid>
  )
}