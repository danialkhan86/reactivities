import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";



interface Props{
    activities:Activity[];
   
    deleteActivity: (id:string) => void;
    submitting:boolean;

}

export default function ActivityList({activities,deleteActivity,submitting}:Props){

    const [target,setTarget]=useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement> ,id:string){
        setTarget(e.currentTarget.name);
        console.log(e.currentTarget.name);
        deleteActivity(id);  

    }

    const{activityStore}=useStore();
    return(

       

        <Segment>
            <Item.Group divided>
                {
                    activities.map(activity =>(
                        <Item key={activity.id}>
                            <Item.Content>
                                <Item.Header as='a'>{activity.title}</Item.Header>
                                <Item.Meta>{activity.date}</Item.Meta>
                                <Item.Description>
                                    <div>{activity.description}</div>
                                    <div>{activity.city} , {activity.venu} </div>
                                </Item.Description>
                                <Item.Extra>
                                    <Button onClick={()=>activityStore.selectActivity(activity.id)} floated='right' content='view' color='blue'></Button>
                                    <Button 
                                        name={activity.id}
                                        loading={submitting && target === activity.id} 
                                        onClick={(e)=>handleActivityDelete(e,activity.id)} 
                                        floated='right' 
                                        content='delete' 
                                        color='red'></Button>
                                    <Label basic content={activity.category}></Label>
                                </Item.Extra>
                            </Item.Content>

                        </Item>
                    ))
                }

            </Item.Group>
        </Segment>

    )
}