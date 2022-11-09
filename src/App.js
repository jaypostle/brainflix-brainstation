import {BrowserRouter, Routes, Route} from 'react-router-dom';
import VideoPage from './pages/VideoPage/VideoPage';
import UploadPage from './pages/UploadPage/UploadPage';
import Header from './components/sections/Header/Header';

function App() {
  
  

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<VideoPage />}/>
        <Route path='/videos' element={<VideoPage />}/>

        {/* I think this is right??? */}
        <Route path='/videos/:id' element={<VideoPage />}/>

        <Route path='/upload' element={<UploadPage />}/>
      </Routes>
    {/* <App /> */}
    </BrowserRouter>
  );
}

export default App;
