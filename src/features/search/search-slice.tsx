import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OramaResults } from "../../app/integrations";


interface SearchTermProvince {
    value: string
}

interface SearchTermCity {
    value: string
}

interface SearchTermEnabled {
    value: boolean
}

interface SearchResults {
    value?: OramaResults
}

const initialState: [SearchTermProvince, SearchTermCity, SearchTermEnabled, SearchResults] = [{value: ''}, {value: ''}, {value: false}, {value: {}}];

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setProvince: (state, action: PayloadAction<SearchTermProvince>) => {
            state[0].value = action.payload.value;
        },
        setCity: (state, action: PayloadAction<SearchTermCity>) => {
            state[1].value = action.payload.value;
        }, 
        enableSearch: (state, action: PayloadAction<SearchTermEnabled>) => {
            state[2].value = action.payload.value;
        },
        loadResults: (state, action: PayloadAction<SearchResults>) => {
            state[3].value = action.payload.value;
        },
    }
});

// export the action creators
export const { setProvince, setCity, enableSearch, loadResults } = searchSlice.actions;

// default export the reducer
export default searchSlice.reducer; 