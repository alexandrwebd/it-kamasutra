const ADD_DIALOG = 'ADD-DIALOG'

const initialState = {
    messagesData: [
        {id: '1', message: 'Hi',},
        {id: '2', message: 'How is your react',},
        {id: '3', message: 'Yo',},
        {id: '4', message: 'fweffef',},
        {id: '5', message: 'xcsdcsdcsd',},
        {id: '6', message: 'dsadasdas',},
        {id: '7', message: 'asdasdasda',},
    ],
    messages: [],
    dialogsData: [
        {id: '1', name: 'Alex',},
        {id: '2', name: 'Dimych',},
        {id: '3', name: 'Andrey',},
        {id: '4', name: 'Sveta',},
        {id: '5', name: 'Sacha',},
        {id: '6', name: 'Viktor',},
        {id: '7', name: 'Valera',},
    ]
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_DIALOG: {
            const newMessage = {
                id: state.messages.length + 1,
                message: action.newMessageBody,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage], // вариант пуша спредом
            }
        }
        default:
            return state
    }
}


export const addDialogActionCreator = (newMessageBody) => ({type: ADD_DIALOG, newMessageBody})

export default dialogsReducer