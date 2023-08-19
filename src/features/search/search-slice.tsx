import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface SearchTermProvince {
    value: string
}


interface SearchTermCity {
    value: string
}

const initialState: [SearchTermProvince, SearchTermCity] = [{value: ''}, {value: ''}];

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setProvince: (state, action: PayloadAction<SearchTermProvince>) => {
            state[0].value = action.payload.value;
        },
        setCity: (state, action: PayloadAction<SearchTermCity>) => {
            state[1].value = action.payload.value;
        }
    }
});

// export the action creators
export const { setProvince, setCity } = searchSlice.actions;

// default export the reducer
export default searchSlice.reducer; 