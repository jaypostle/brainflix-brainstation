import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import VideoPage from "./pages/VideoPage/VideoPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import Header from "./components/sections/Header/Header";
import { useEffect, useState } from "react";
import { getVideos } from "./utilities/utilities";
import axios from "axios";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  // ** STATES ** //
  const [defaultVideo, setDefaultVideo] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const [currentVideoId, setCurrentVideoId] = useState(defaultVideo); // takes an id

  // This is for the side panel
  const [videos, setVideos] = useState();

  //Video Details expanded are for a single video page
  // find the video with the id == to current video id, then set those details down
  const [videoExpandedDetails, setVideoExpandedDetails] = useState();

  // **** FETCH USE EFFECT **** ///
  const SEARCH_URL = `http://localhost:8080/api`;
  const searchByVideoId = (videoId) => `${SEARCH_URL}/videos/${videoId}`;
  const searchVideosAll = `${SEARCH_URL}/videos`;

  // * Fetch Total Video Data * //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: videos } = await axios.get(searchVideosAll);
        const { data: videodetails } = await axios.get(
          searchByVideoId(currentVideoId)
        );

   
        const filteredVideos = getVideos(currentVideoId, videos);
        setVideos(filteredVideos); // this sets the video list as all videos
        setVideoExpandedDetails(videodetails);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentVideoId]);

  const handleVideoChange = (videoId) => {
    setCurrentVideoId(videoId);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={`/videos/${defaultVideo}`} />} />
        <Route
          path="videos/:videoId"
          element={
            <VideoPage
              videos={videos}
              videoExpandedDetails={videoExpandedDetails}
              onVideoChange={handleVideoChange}
            />
          }
        />

        <Route path="/upload" element={<UploadPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
