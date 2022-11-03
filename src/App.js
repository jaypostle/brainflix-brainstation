import { useState } from 'react';
import Header from './components/sections/Header/Header';
import Hero from './components/sections/Hero/Hero';
import MovieDetails from './components/sections/MovieDetails/MovieDetails';
import CommentWall from './components/sections/CommentWall/CommentWall';
import NextVideos from './components/sections/NextVideos/NextVideos';
// import VideoDetails from './data/video-details.json';

import {getVideos, getVideoDetails} from './utilities/utilities';

import './App.scss';

function App() {

  const [currentVideoId, setCurrentVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8"); // takes an id

  // This is for the side panel
  const [videos, setVideos] = useState(getVideos(currentVideoId));

  //Video Details expanded are for a single video page
  // find the video with the id == to current video id, then set those details down
  const [videoExpandedDetails, setVideoExpandedDetails ] = useState(
    getVideoDetails(currentVideoId)
  );

  const handleChangeVideo = (event, videoId) => {
    // console.log(event, videoId);
    setCurrentVideoId(videoId);
    setVideos(getVideos(videoId));
    setVideoExpandedDetails(getVideoDetails(videoId));
  }
  

  return (
    <div className="App">
      <Header />
      <Hero videoDetails={videoExpandedDetails}/>
      <MovieDetails videoDetails={videoExpandedDetails}/>
      <CommentWall videoComments={videoExpandedDetails.comments}/>
      <NextVideos videoList={videos} onVideoClick={handleChangeVideo}/>
    </div>
  );
}

export default App;
