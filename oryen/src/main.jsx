import React from 'react';import {createRoot} from 'react-dom/client';import {MemoryRouter} from 'react-router-dom';
import App from './App';import {DataProvider} from './store';import './styles.css';
// In-memory routing: works even where the URL/hash is blocked (sandboxed previews, file viewers).
const start=(()=>{try{return location.hash.replace(/^#/,'')||'/'}catch{return '/'}})();
createRoot(document.getElementById('root')).render(<MemoryRouter initialEntries={[start]}><DataProvider><App/></DataProvider></MemoryRouter>);
