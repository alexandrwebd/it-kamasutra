import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

const state = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s, my first post', likesCount: 11},
    ]
}

it ('length of posts should be incremented', () => {
    // 1.Тестові дані
    const action = addPostActionCreator('it-kamasutra.com')
    // 2. action действие
    const newState = profileReducer(state, action)
    //3. Перевіряєм те що чакаємо за допомогою функцшї expect
    expect(newState.postsData.length).toBe(3);
})

it ('message of new post should be correct', () => {
    // 1.Тестові дані
    const action = addPostActionCreator('it-kamasutra.com')
    // 2. action действие
    const newState = profileReducer(state, action)
    //3. Перевіряєм те що чакаємо за допомогою функцшї expect
    expect(newState.postsData[2].message).toBe('it-kamasutra.com');
});

it ('after deleting length of messages should be decrement', () => {
    // 1.Тестові дані
    const action = deletePost(1)
    // 2. action действие
    const newState = profileReducer(state, action)
    //3. Перевіряєм те що чакаємо за допомогою функцшї expect
    expect(newState.postsData.length).toBe(1)
})

it (`after deleting length shouln't be decrement if id  is incorrect`, () => {
    // 1.Тестові дані
    const action = deletePost(1000)
    // 2. action действие
    const newState = profileReducer(state, action)
    //3. Перевіряєм те що чакаємо за допомогою функцшї expect
    expect(newState.postsData.length).toBe(2)
})