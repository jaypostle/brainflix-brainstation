import moment from 'moment/moment';

export const getVideos = (videoId, videoArray) => {
  return videoArray.filter((video) => video.id !== videoId);
};

export const getVideoDetails = (videoId, videoDetails) => {
  return videoDetails.find((video) => video.id === videoId);
};


export const formatDate = (date) => {
  let newDate = new Date(date).toLocaleDateString();
  // console.log(newDate);
  return newDate;
}


export const formatMomentDate = (date) => {
  let newMoment = moment(date).startOf('hour').fromNow(); 
  
  return toTitleCase(newMoment);
}

  
function toTitleCase(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}




////// OLD FUNCTIONS //////

// data
// import videos from "../data/videos.json";
// import videoDetails from "../data/video-details.json";
// export const getVideos = (videoId) => {
//   return videos.filter((video) => video.id !== videoId);
// };

// export const getVideoDetails = (videoId) => {
//   return videoDetails.find((video) => video.id === videoId);
// };