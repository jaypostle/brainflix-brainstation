import { useEffect } from 'react';
import Hero from '../../components/sections/Hero/Hero';
import MovieDetails from '../../components/sections/MovieDetails/MovieDetails';
import CommentWall from '../../components/sections/CommentWall/CommentWall';
import NextVideos from '../../components/sections/NextVideos/NextVideos';

import { useParams } from 'react-router-dom';


import '../../App.scss';

function VideoPage({videoExpandedDetails, videos, onVideoChange}) {
  const { videoId } = useParams();
  if(videoId) {
    console.log(videoId);
  }

//   const [currentVideoId, setCurrentVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8"); // takes an id

  // This is for the side panel
//   const [videos, setVideos] = useState();


  //Video Details expanded are for a single video page
  // find the video with the id == to current video id, then set those details down
//   const [videoExpandedDetails, setVideoExpandedDetails ] = useState();

  // **** FETCH USE EFFECT **** ///
//   const SEARCH_URL = `https://project-2-api.herokuapp.com/videos`;
//   const API_KEY = `?api_key=${process.env.REACT_APP_BRAINFLIX_API_KEY}`;
//   const searchByVideoId = (videoId) => `${SEARCH_URL}/${videoId}${API_KEY}`;
//   const searchVideosAll = `${SEARCH_URL}${API_KEY}`;


  // * Fetch Total Video Data * //
//   useEffect(() => {
//     const fetchDataVideoData = async () => {
//         try {
//             const { data } = await axios.get(searchVideosAll)
//             // console.log(data);
//             const filteredVideos = getVideos(currentVideoId, data)
//             setVideos(filteredVideos); // this sets the video list as all videos
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     fetchDataVideoData();
//   }, [currentVideoId])

   // * Fetch Single Video Data * //
//   useEffect(() => {
//     const fetchSingleVideo = async () => {
//         try {
//             const {data} = await axios.get(searchByVideoId(currentVideoId));
//             // console.log(data);
//             setVideoExpandedDetails(data);
//         } catch(error) {
//             console.log(error);
//         }
//     }
//     fetchSingleVideo();
//   }, [currentVideoId])


  // Handle Change Video Id
  // Running this pulls all videos back into currentVideoId
//   useEffect(() => {
//     if(Object.keys(paramsVideoId).length === 0) {

//     }
//     // setCurrentVideoId(paramsVideoId);
//   }, [paramsVideoId])
  

    useEffect(() => {
        if(videoId) {
            if(Object.keys(videoId).length !== 0) {
                onVideoChange(videoId);
            }
        }
    }, [videoId]);

  return (
    <div className="App">
      {videoExpandedDetails && <Hero videoDetails={videoExpandedDetails}/>}
      
      <main className='video-content'>
        <div className="video-content__details">
            {videoExpandedDetails && <MovieDetails videoDetails={videoExpandedDetails}/>}
            {videoExpandedDetails && <CommentWall videoComments={videoExpandedDetails.comments}/> }
        </div>
        <div className="video-content__next">
          {videos && <NextVideos videoList={videos} /> }
        </div>
      </main>
    </div>
  );
}

export default VideoPage;
