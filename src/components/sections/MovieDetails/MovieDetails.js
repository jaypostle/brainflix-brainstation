import React from 'react'
import "./MovieDetails.scss";
import Views from '../../../assets/icons/views.svg';
import Likes from '../../../assets/icons/likes.svg';


function MovieDetails({videoDetails}) {
  // console.log(videoDetails);


  
  return (
    <section className='movie-details'>
      <h1 className="movie-details__title">{videoDetails.title}</h1>
      <div className="movie-metadata">
        <div className="meta-data-wrapper--creator-info">
          <span className="movie-metadata__creator">By {videoDetails.channel}</span><span className="movie-metadata__date">{videoDetails.timestamp}</span>
        </div>
        <div className="meta-data-wrapper--views">
          <img src={Views} alt="views icon" />
          <span className="movie-metadata__views">{videoDetails.views}</span>
        </div>
        <div className="meta-data-wrapper--likes">
          <img src={Likes} alt="likes icon" />
          <span className="movie-metadata__likes">{videoDetails.likes}</span>
        </div>
      <p className="movie-details__description">{videoDetails.description}</p>
       
     </div>
    </section>
  )
}

export default MovieDetails