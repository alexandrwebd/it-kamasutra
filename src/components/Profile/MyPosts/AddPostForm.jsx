import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)
const AddPostForm = (props) => {
    return (
        <div>
            <h3>My posts</h3>
            <form onSubmit={props.handleSubmit}>
                <Field name={'newPostBody'} component={Textarea} placeholder={'Post message'} validate={[required, maxLength10]} cols="30" rows="10" />
                <button>Add post</button>
            </form>
        </div>
    )
}
export default reduxForm({
    // даем уникальное имя нашей форме
    form: 'ProfileAddNewPostForm'
})(AddPostForm)

