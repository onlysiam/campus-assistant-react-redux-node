import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "suggestion",
  initialState: { state: false },
  reducers: {
    suggestionWindowToggle: (toggleSuggestionWindow, action) => {
      toggleSuggestionWindow.state = !toggleSuggestionWindow.state;
    },
    suggestionWindowToggleTrue: (toggleSuggestionWindow, action) => {
      toggleSuggestionWindow.state = true;
    },
    suggestionWindowToggleFalse: (toggleSuggestionWindow, action) => {
      toggleSuggestionWindow.state = false;
    },
  },
});

export const {
  suggestionWindowToggle,
  suggestionWindowToggleTrue,
  suggestionWindowToggleFalse,
} = slice.actions;
export default slice.reducer;
