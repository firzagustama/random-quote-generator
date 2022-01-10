import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    quotes: [],
    selectedQuote: "",
    selectedAuthor: "",
}

export const fecthQuoteAsync = createAsyncThunk(
    'quote/fetchQuote',
    async () => {
        const response = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        return await response.json()
    }
)

export const quoteSlice = createSlice({
    name: "quote",
    initialState,
    reducers: {
        randomQuote: (state) => {
            var randomIndex = Math.floor(Math.random() * state.quotes.length)
            state.selectedQuote = state.quotes[randomIndex].quote
            state.selectedAuthor = state.quotes[randomIndex].author
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fecthQuoteAsync.fulfilled, (state, action) => {
              console.log(action)
            state.quotes = action.payload.quotes
            var randomIndex = Math.floor(Math.random() * state.quotes.length)
            state.selectedQuote = state.quotes[randomIndex].quote
            state.selectedAuthor = state.quotes[randomIndex].author
        })
    }
})

export const { randomQuote } = quoteSlice.actions

export const selectQuote = (state) => state.quote.selectedQuote
export const selectAuthor = (state) => state.quote.selectedAuthor

export default quoteSlice.reducer

