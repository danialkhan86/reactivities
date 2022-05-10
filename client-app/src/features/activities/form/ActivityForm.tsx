import React, { ChangeEvent, useState } from "react";
import { Button, Form, FormInput, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";


interface Props{
    activity : Activity | undefined;
    closeForm: () => void;
    createOrEdit : (activity:Activity)=>void;
}

export default function ActivityForm({ activity: selectedActivity,closeForm,createOrEdit } : Props){

    const initialState = selectedActivity ?? {
        id : '',
        title : '',
        category:'',
        description:'',
        date:'',
        city:'',
        venu:''

    }

    const[activity,setActivity]=useState(initialState);

    function handleSubmit()
    {
        createOrEdit(activity);
        console.log(activity);
    }

    function handleIputChange(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
    {
        const {name,value}=event.target;
        setActivity({...activity,[name]:value});


    }



    return(

        <Segment clearing>
            <Form onSubmit={()=>handleSubmit()} autoComplete='off'>
                <FormInput placeholder='Title' value={activity.title} name='title'  onChange={handleIputChange} />
                <Form.TextArea text placeholder='Description' value={activity.description} name='description'  onChange={handleIputChange} />
                <FormInput placeholder='Category' value={activity.category} name='Category'  onChange={handleIputChange} />
                <FormInput type='date' placeholder='Date' value={activity.date} name='Date'  onChange={handleIputChange} />
                <FormInput placeholder='City' value={activity.city} name='city'  onChange={handleIputChange} />
                <FormInput placeholder='Venu' value={activity.venu} name='venu'  onChange={handleIputChange} />

                <Button floated='right' positive type='submit' content='submit'></Button>
                <Button onClick={()=>closeForm()} floated='right' type='button' content='cancel'></Button>
            </Form>
        </Segment>
    )
}