import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";



export default function ActivityDetail(){

    const {activityStore}=useStore();
    const {selectedActivity: activity, openForm, cancelSelectedActivity}=activityStore;

    if(!activity) return <LoadingComponent  content='Loading app' />;


    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                   {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                <Button onClick={()=> openForm(activity.id)} basic color="blue" content='Edit'></Button>
                <Button onClick={()=>cancelSelectedActivity()} basic color="grey" content='Cancel'></Button>

                </Button.Group>
            </Card.Content>
        </Card>
    )

}

    
