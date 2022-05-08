import React from "react";
import { Button, Form, FormInput, Segment } from "semantic-ui-react";


export default function ActivityForm(){

    return(

        <Segment clearing>
            <Form>
                <FormInput placeholder='Title' />
                <Form.TextArea text placeholder='Description' />
                <FormInput placeholder='Category' />
                <FormInput placeholder='Date' />
                <FormInput placeholder='City' />
                <FormInput placeholder='Venu' />

                <Button floated='right' positive type='submit' content='submit'></Button>
                <Button floated='right' type='button' content='cancel'></Button>
            </Form>
        </Segment>
    )
}