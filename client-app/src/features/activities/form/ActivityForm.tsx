import { observe } from "mobx";
import { observer, Observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, FormInput, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default observer(function ActivityForm() {

    const { activityStore } = useStore();

    const { selectedActivity, closeForm, createActivity, updateActivity, loading } = activityStore;

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venu: ''

    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        activity.id ? updateActivity(activity) : createActivity(activity);
        console.log(activity);
    }

    function handleIputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });


    }



    return (

        <Segment clearing>
            <Form onSubmit={() => handleSubmit()} autoComplete='off'>
                <FormInput placeholder='Title' value={activity.title} name='title' onChange={handleIputChange} />
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleIputChange} />
                <FormInput placeholder='Category' value={activity.category} name='category' onChange={handleIputChange} />
                <FormInput type="date" placeholder='Date' value={activity.date} name='date' onChange={handleIputChange} />
                <FormInput placeholder='City' value={activity.city} name='city' onChange={handleIputChange} />
                <FormInput placeholder='Venu' value={activity.venu} name='venu' onChange={handleIputChange} />

                <Button loading={loading} floated='right' positive type='submit' content='submit'></Button>
                <Button onClick={() => closeForm()} floated='right' type='button' content='cancel'></Button>
            </Form>
        </Segment>
    )
})