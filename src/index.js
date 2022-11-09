import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UploadPage from './pages/UploadPage/UploadPage';
import Header from './components/sections/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/videos' element={<App />}/>

        {/* I think this is right??? */}
        <Route path='/videos/:id' element={<App />}/>

        <Route path='/upload' element={<UploadPage />}/>
      </Routes>
    {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
