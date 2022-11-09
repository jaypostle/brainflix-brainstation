import { useEffect, useState } from 'react';
import Hero from '../../components/sections/Hero/Hero';
import MovieDetails from '../../components/sections/MovieDetails/MovieDetails';
import CommentWall from '../../components/sections/CommentWall/CommentWall';
import NextVideos from '../../components/sections/NextVideos/NextVideos';
// import VideoDetails from './data/video-details.json';
import { useParams } from 'react-router-dom';
import {getVideos, getVideoDetails} from '../../utilities/utilities';
import axios from 'axios';

import '../../App.scss';

function VideoPage() {
//   const { paramsVideoId } = useParams();
//   console.log(paramsVideoId);


// **** OLD WAY ///
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


  // **** FETCH USE EFFECT **** ///
  const SEARCH_URL = `https://project-2-api.herokuapp.com/videos`;
  const API_KEY = `?api_key=${process.env.REACT_APP_BRAINFLIX_API_KEY}`;
  const searchByVideoId = (videoId) => `${SEARCH_URL}/${videoId}${API_KEY}`;
  


  // * Fetch Total Video Data * //
  useEffect(() => {
    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${SEARCH_URL}${API_KEY}`)
            console.log(data);
            setVideos(data);
        } catch (error) {
            console.log(error);
        }
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      
      <Hero videoDetails={videoExpandedDetails}/>
      <main className='video-content'>
        <div className="video-content__details">
          <MovieDetails videoDetails={videoExpandedDetails}/>
          <CommentWall videoComments={videoExpandedDetails.comments}/>
        </div>
        <div className="video-content__next">
          <NextVideos videoList={videos} onVideoClick={handleChangeVideo}/>
        </div>
      </main>
    </div>
  );
}

export default VideoPage;
