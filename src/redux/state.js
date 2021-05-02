import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postData: [
            {
                name: 'Valerii',
                age: '24',
                message: 'Hey, how are you?',
                id: '1'
            },
            {
                name: 'Vlad',
                age: '25',
                message: 'It`s my first post',
                id: '2'
            },
        ],
    },
    dialogsPage: {
        dialogData: [
            {id: 1, name: 'Vlad'},
            {id: 2, name: 'Max'},
            {id: 3, name: 'Aleksandra'},
            {id: 4, name: 'Julia'},
            {id: 5, name: 'Lipa'},
            {id: 6, name: 'Illa'},
        ],
        messageData: [
            {id: 1, message: 'Hey'},
            {id: 2, message: 'What`s up'},
            {id: 3, message: 'How are you?'},
        ],
    },
}


export let addPost = (postMessage) => {
    let newPost = {
        name:'',
        age: '',
        message: postMessage,
        id: '3'
    };
    state.profilePage.postData.push(newPost)
    rerenderEntireTree(state);
}
export default state;