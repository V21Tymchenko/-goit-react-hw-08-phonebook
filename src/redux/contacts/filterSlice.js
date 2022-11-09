import { createSlice } from '@reduxjs/toolkit';

const filtersItemContacts = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersItemContacts,
  reducers: {
    setContactsFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setContactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
