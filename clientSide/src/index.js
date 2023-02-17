import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './redux/store/store';
import {Provider} from 'react-redux'
import App from './App';



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
      </Provider>
    </BrowserRouter>

    
  
);

