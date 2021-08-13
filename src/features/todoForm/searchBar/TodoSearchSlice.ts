import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const SearchBar = ""

const initialState = SearchBar;

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setSearchBar(state, action: PayloadAction<string>) {
      return action.payload;
    }
  }
});

export const { setSearchBar } = searchBarSlice.actions;

export default searchBarSlice.reducer; 