import { useEffect, useState } from "react";
import Hero from "../../components/sections/Hero/Hero";
import MovieDetails from "../../components/sections/MovieDetails/MovieDetails";
import CommentWall from "../../components/sections/CommentWall/CommentWall";
import NextVideos from "../../components/sections/NextVideos/NextVideos";
import axios from "axios";
import { getVideos } from "../../utilities/utilities";
import { useParams } from "react-router-dom";

function VideoPage() {
  // ** STATES ** //

  const [currentVideoId, setCurrentVideoId] = useState(null); // takes an id

  // This is for the side panel
  const [videos, setVideos] = useState();

  //Video Details expanded are for a single video page
  // find the video with the id == to current video id, then set those details down
  const [videoExpandedDetails, setVideoExpandedDetails] = useState();

  const { videoId } = useParams();

  useEffect(() => {
    setCurrentVideoId(videoId);
  }, [videoId]);

  // **** FETCH USE EFFECT **** ///
  const SEARCH_URL = `http://localhost:8080/api`;
  const searchByVideoId = (videoId) => `${SEARCH_URL}/videos/${videoId}`;
  const searchVideosAll = `${SEARCH_URL}/videos`;

  // * Fetch Total Video Data * //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: videos } = await axios.get(searchVideosAll);

        setCurrentVideoId(videos[0].id);

        const filteredVideos = getVideos(currentVideoId, videos);
        setVideos(filteredVideos); // this sets the video list as all videos

        const { data: videodetails } = await axios.get(
          searchByVideoId(videos[0].id)
        );
        setVideoExpandedDetails(videodetails);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: videos } = await axios.get(searchVideosAll);

        setCurrentVideoId(videos[0].id);

        const filteredVideos = getVideos(currentVideoId, videos);
        setVideos(filteredVideos); // this sets the video list as all videos

        const { data: videodetails } = await axios.get(
          searchByVideoId(videos[0].id)
        );
        setVideoExpandedDetails(videodetails);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [videoId])

  // const handleVideoChange = (videoId) => {
  //   setCurrentVideoId(videoId);
  //   console.log(videoId);
  // };

  return (
    <div className="App">
      {videoExpandedDetails && <Hero videoDetails={videoExpandedDetails} />}

      <main className="video-content">
        <div className="video-content__details">
          {videoExpandedDetails && (
            <MovieDetails videoDetails={videoExpandedDetails} />
          )}
          {videoExpandedDetails && (
            <CommentWall videoComments={videoExpandedDetails.comments} />
          )}
        </div>
        <div className="video-content__next">
          {videos && <NextVideos videoList={videos} />}
        </div>
      </main>
    </div>
  );
}

export default VideoPage;
