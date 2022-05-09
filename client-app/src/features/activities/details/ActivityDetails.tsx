import { format } from "date-fns";
import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";


interface Props{
    activity : Activity;
    cancelSelectActivity:()=> void;
}

export default function ActivityDetail({activity,cancelSelectActivity}:Props){


    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{activity.date.toLocaleDateString}</span>
                </Card.Meta>
                <Card.Description>
                   {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                <Button basic color="blue" content='Edit'></Button>
                <Button onClick={()=>cancelSelectActivity()} basic color="grey" content='Cancel'></Button>

                </Button.Group>
            </Card.Content>
        </Card>
    )

}

    
