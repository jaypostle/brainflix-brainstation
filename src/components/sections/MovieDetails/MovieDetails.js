import React from 'react'
import "./MovieDetails.scss";
import Views from '../../../assets/icons/views.svg';
import Likes from '../../../assets/icons/likes.svg';


function MovieDetails({videoDetails}) {
  // console.log(videoDetails);


  
  return (
    <section className='movie-details'>
      <h1 className="movie-details__title">{videoDetails[0].title}</h1>
      <div className="movie-metadata">
        <div className="meta-data-wrapper--creator-info">
          <span className="movie-metadata__creator">By {videoDetails[0].channel}</span><span className="movie-metadata__date">{videoDetails[0].timestamp}</span>
        </div>
        <div className="meta-data-wrapper--views">
          <img src={Views} alt="views icon" />
          <span className="movie-metadata__views">{videoDetails[0].views}</span>
        </div>
        <div className="meta-data-wrapper--likes">
          <img src={Likes} alt="likes icon" />
          <span className="movie-metadata__likes">{videoDetails[0].likes}</span>
        </div>
      <p className="movie-details__description">{videoDetails[0].description}</p>
       
     </div>
    </section>
  )
}

export default MovieDetails