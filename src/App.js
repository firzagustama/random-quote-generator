import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Quote } from './features/quote/Quote';
import { fecthQuoteAsync } from './features/quote/quoteSlice';

function App() {
  const dispatch = useDispatch()
  dispatch(fecthQuoteAsync())
  
  return (
    <div className="App">
      <header className="App-header">
        <Quote />
      </header>
    </div>
  );
}

export default App;
