import {createSlice} from '@reduxjs/toolkit';

export const regexSlice = createSlice({
    name: 'regex',
    initialState: {
        exp: '',
        modifier: 'g'
    },
    reducers: {
        setExp: (state, action) => {
            state.exp = `${action.payload}`
        }
    }
})
export const {setExp} = regexSlice.actions;

export default regexSlice.reducer;