import { observer } from "mobx-react-lite";
import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import ActivityDetail from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";



export default observer(function ActivityDashBoad() {

  const { activityStore } = useStore();

  const { selectedActivity, editMode } = activityStore;


  return (

    <Grid>
      <GridColumn width='10'>

        <ActivityList />

      </GridColumn>
      <GridColumn width='6'>
        {selectedActivity && !editMode &&
          <ActivityDetail />}

        {editMode && <ActivityForm />}


      </GridColumn>
    </Grid>
  )
})