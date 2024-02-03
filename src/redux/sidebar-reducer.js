
const initialState = {
    sidebar: {
        menu: [
            {id:'1', link:'Profile', rout:'/profile'},
            {id:'2', link:'Dialogs', rout:'/dialogs'},
            {id:'3', link:'Messages', rout:'/messages'},
            {id:'4', link:'News', rout:'/news'},
            {id:'5', link:'Music', rout:'/music'},
            {id:'6', link:'Users', rout:'/users'},
            {id:'7', link:'Settings', rout:'/settings'},
        ],
        friends: [
            {id:'1', name:'Andrew', rout:'/andrew'},
            {id:'2', name:'Sasha', rout:'/sasha'},
            {id:'3', name:'Sveta', rout:'/sveta'},
        ]
    }
}
const sidebarReducer = (state = initialState, action) => {
    switch (action.type){

        default:
            return state
    }
}

export default sidebarReducer