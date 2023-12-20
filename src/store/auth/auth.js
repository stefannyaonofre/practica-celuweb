import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated: false,
    userLogged: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuthenticates: (state) => {
            state.isAuthenticated = !state.isAuthenticated
        },
        setUserLogged: (state, action) => {
            state.userLogged = action.payload;
        },
    }
})

export const {setIsAuthenticates, setUserLogged} = authSlice.actions