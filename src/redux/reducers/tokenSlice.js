import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";
 
export const session = () => JSON.parse(localStorage.getItem('tokenBearer') || '{}')

export const getToken = () => {
    return localStorage.getItem('tokenBearer');
}

export const login = createAsyncThunk('/user/login', async(values, {rejectWithValue}) => {
    try  {
        const url = '/api/v1/user/login';
        const response = await api.post(url, values);
        if (response.status === 200){
            const payload = {...response?.data?.data};
            localStorage.setItem('tokenBearer', JSON.stringify(payload))
            return payload
        }else {
        rejectWithValue(response);
        }
    } catch(error){
        if (error.response){
            throw error
        }
    return rejectWithValue(error.response.data)
}
})

const initialState = {
    login: {
        token: getToken() || null,
        user: session().user || null,
        loading: false
    }
}

export const tokenSlice = createSlice({
    name: "token", 
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers: {
        //LOGIN
        [login.fulfilled]: (state, action) => {
            state.login.token = action.payload.token;
            state.login.user = action.payload.user;
            state.login.loading = false;
        },
        [login.pending]: (state, action) => {
            state.login.loading = true;
        },
        [login.rejected]: (state, action) => {
            state.login.loading = false;
        },
    }
})

export const {reset} = tokenSlice.actions;

export default tokenSlice.reducer;