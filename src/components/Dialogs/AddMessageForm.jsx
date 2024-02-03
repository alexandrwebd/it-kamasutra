import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newMessageBody'} component={Textarea} placeholder='Enter your message'> validate={[required,maxLength50]} </Field>
            <button>Send</button>
        </form>
    )
}

export default reduxForm({
    // даем уникальное имя нашей форме
    form: 'dialogAddMessageForm'
})(AddMessageForm)