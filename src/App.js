import {BrowserRouter, Routes, Route} from 'react-router-dom';
import VideoPage from './pages/VideoPage/VideoPage';
import UploadPage from './pages/UploadPage/UploadPage';
import Header from './components/sections/Header/Header';
import { useEffect, useState } from 'react';
import {getVideos} from './utilities/utilities';
import axios from 'axios';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {

  // ** STATES ** //
  const [defaultVideo, setDefaultVideo] = useState("84e96018-4022-434e-80bf-000ce4cd12b8")
  const [currentVideoId, setCurrentVideoId] = useState(defaultVideo); // takes an id

  // This is for the side panel
  const [videos, setVideos] = useState();
  
  //Video Details expanded are for a single video page
  // find the video with the id == to current video id, then set those details down
  const [videoExpandedDetails, setVideoExpandedDetails ] = useState();

// **** FETCH USE EFFECT **** ///
const SEARCH_URL = `https://project-2-api.herokuapp.com/videos`;
const API_KEY = `?api_key=${process.env.REACT_APP_BRAINFLIX_API_KEY}`;
const searchByVideoId = (videoId) => `${SEARCH_URL}/${videoId}${API_KEY}`;
const searchVideosAll = `${SEARCH_URL}${API_KEY}`;


// * Fetch Total Video Data * //
useEffect(() => {
  const fetchDataVideoData = async () => {
      try {
          const { data } = await axios.get(searchVideosAll)
          // console.log(data);
          const filteredVideos = getVideos(currentVideoId, data)
          setVideos(filteredVideos); // this sets the video list as all videos
      } catch (error) {
          console.log(error);
      }
  }
  fetchDataVideoData();
}, [currentVideoId])

 // * Fetch Single Video Data * //
useEffect(() => {
  const fetchSingleVideo = async () => {
      try {
          const {data} = await axios.get(searchByVideoId(currentVideoId));
          // console.log(data);
          setVideoExpandedDetails(data);
      } catch(error) {
          console.log(error);
      }
  }
  fetchSingleVideo();
}, [currentVideoId])


  const handleVideoChange = (videoId) => {
    setCurrentVideoId(videoId);
    console.log(videoId);
  };

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<VideoPage videos={videos} videoExpandedDetails={videoExpandedDetails} onVideoChange={handleVideoChange} defaultVideo={defaultVideo}/>}/>
        <Route path='/videos' element={<VideoPage videos={videos} videoExpandedDetails={videoExpandedDetails} onVideoChange={handleVideoChange}/>}/>

        <Route path='/videos/:videoId' element={<VideoPage videos={videos} videoExpandedDetails={videoExpandedDetails} onVideoChange={handleVideoChange} />}/>

        <Route path='/upload' element={<UploadPage />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
