import { createSlice, nanoid } from '@reduxjs/toolkit'


let initialState = [
    { id: '1', name: 'Matt', title: 'Hey There', content: 'Welcome to my message board!'},
    { id: '2', name: 'Matt', title: 'And While You Are Here', content: 'Post a message 🙂'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.unshift(action.payload)
            },
            prepare(name, title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        title,
                        content
                    }
                }
            }
        },
        clearAllPosts: () => initialState = [],
    }
});


export const selectAllPosts = (state) => state.posts;

export const { addPost, clearAllPosts } = postsSlice.actions

export default postsSlice.reducer;


