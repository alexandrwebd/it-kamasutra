import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message:'Hi, how are you?', likesCount: 12},
                {id: 2, message:'It\'s, my first post', likesCount: 11},
            ],
            newPostText: ''

        },
        dialogsPage: {
            messagesData: [
                {id:'1', message:'Hi', },
                {id:'2', message:'How is your react', },
                {id:'3', message:'Yo', },
                {id:'4', message:'fweffef', },
                {id:'5', message:'xcsdcsdcsd', },
                {id:'6', message:'dsadasdas', },
                {id:'7', message:'asdasdasda', },
            ],
            messages: [],
            dialogsData: [
                {id:'1', name:'Alex', },
                {id:'2', name:'Dimych', },
                {id:'3', name:'Andrey', },
                {id:'4', name:'Sveta', },
                {id:'5', name:'Sacha', },
                {id:'6', name:'Viktor', },
                {id:'7', name:'Valera', },
            ],
            newDialogText: ''
        },
        sidebar: {
            menu: [
                {id:'1', link:'Profile', rout:'/profile'},
                {id:'2', link:'Dialogs', rout:'/dialogs'},
                {id:'3', link:'Messages', rout:'/messages'},
                {id:'4', link:'News', rout:'/news'},
                {id:'5', link:'Music', rout:'/music'},
                {id:'6', link:'Settings', rout:'/settings'},
            ],
            friends: [
                {id:'1', name:'Andrew', rout:'/andrew'},
                {id:'2', name:'Sasha', rout:'/sasha'},
                {id:'3', name:'Sveta', rout:'/sveta'},
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer // наблюдатель (паттерн)
    },

    dispatch: function (action) {
        this._state.profilePage = (this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}


export default store

window.state = store