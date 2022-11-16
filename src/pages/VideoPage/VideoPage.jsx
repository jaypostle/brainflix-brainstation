import { useEffect } from 'react';
import Hero from '../../components/sections/Hero/Hero';
import MovieDetails from '../../components/sections/MovieDetails/MovieDetails';
import CommentWall from '../../components/sections/CommentWall/CommentWall';
import NextVideos from '../../components/sections/NextVideos/NextVideos';


import { useParams } from 'react-router-dom';


function VideoPage({videoExpandedDetails, videos, onVideoChange, defaultVideo}) {
    const { videoId } = useParams();
    if(videoId) {
      console.log(videoId);
    }

    


    useEffect(() => {
        //  if the link is / then run onVideoChange and set it to the id of the first video
        // if(videoId) {
            // if(Object.keys(videoId).length !== 0) {
                onVideoChange(videoId);
            // }
        // } else {
          // onVideoChange(defaultVideo)
        // }
    }, [videoId, onVideoChange]);

 

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
