import { observer } from "mobx-react-lite";
import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import ActivityDetail from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
  activities: Activity[];
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default observer( function ActivityDashBoad({ activities, createOrEdit, deleteActivity, submitting }: Props) {

  const { activityStore } = useStore();

  const { selectedActivity, editMode } = activityStore;


  return (

    <Grid>
      <GridColumn width='10'>

        <ActivityList activities={activities}
          deleteActivity={deleteActivity}
          submitting={submitting} />

      </GridColumn>
      <GridColumn width='6'>
        {selectedActivity && !editMode &&
          <ActivityDetail />}

        {editMode && <ActivityForm 
          createOrEdit={createOrEdit}
          submitting={submitting} />}


      </GridColumn>
    </Grid>
  )
})