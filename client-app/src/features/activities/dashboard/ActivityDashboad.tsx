import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetail from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props{
  activities:Activity[];
}

export default function ActivityDashBoad({activities}:Props) {
  return (

    <Grid>
      <GridColumn width='10'>
        <ActivityList activities={activities} />

      </GridColumn>
      <GridColumn width='6'>
        { activities[0] && 
        <ActivityDetail activity={activities[0]} />}
        <ActivityForm />

      </GridColumn>
    </Grid>
  )
}