import React from 'react';
import "./Hero.scss";

function Hero({videoDetails}) {

  return (
    <section className="section--hero">
      <video className='hero__video' src={videoDetails.video} poster={videoDetails.image} controls>
      </video>
      <div className="video-controls">
        {/* {videoDetails.duration} */}
        {/* Play button */}
        {/* Scrubber */}
        {/* Expand */}
        {/* Volume Control */}
      </div>
</section>
  )
}

export default Hero