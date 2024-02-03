import React from 'react'
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm";
const Dialogs = (props) => {
    const state = props.dialogsPage

    const dialogsElements = state.dialogsData.map(item => <DialogItem key={item.id} name={item.name} id={item.id} />)
    const messagesElements = state.messagesData.map(item => <Message key={item.id} message={item.message} />)
    const newMessageBody = state.messages.map(item => <Message key={item.id} message={item.message} />)

    const addNewMessage = (values) =>{
        props.onSendMessageClick(values.newMessageBody)
    }


    // if (!props.isAuth) return <Navigate to={"/login"} />
            return (
                <div className={classes.dialogs}>
                    <div className={classes.dialogsItems }>
                        {
                            dialogsElements
                        }
                    </div>
                    <div className={classes.messages}>
                        <div className={classes.messageItem}>
                            {
                                messagesElements
                            }
                        </div>
                        <div className={classes.messageItem2}>
                            {
                                newMessageBody
                            }
                        </div>

                    </div>

                    <AddMessageForm onSubmit={addNewMessage} />

                </div>
            )

}

export default Dialogs
