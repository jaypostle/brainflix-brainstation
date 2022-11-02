import { useState } from 'react';
import Header from './components/sections/Header/Header';
import Hero from './components/sections/Hero/Hero';
import MovieDetails from './components/sections/MovieDetails/MovieDetails';
import CommentWall from './components/sections/CommentWall/CommentWall';
import NextVideos from './components/sections/NextVideos/NextVideos';
import VideoDetails from './data/video-details.json';

import './App.scss';

function App() {

  const [currentVideo, setCurrentVideo] = useState("84e96018-4022-434e-80bf-000ce4cd12b8"); // takes an id

  // find the video with the id == to current video id, then set those details down
  const [videoDetails, setVideoDetails]= useState(VideoDetails);
  const displayedVideo = videoDetails.filter(video => video.id === currentVideo)
  

  // console.log(videoDetails);
  // console.log(displayedVideo);

  return (
    <div className="App">
      <Header />
      <Hero videoDetails={displayedVideo}/>
      <MovieDetails videoDetails={displayedVideo}/>
      <CommentWall videoDetails={displayedVideo}/>
      <NextVideos />
    </div>
  );
}

export default App;
