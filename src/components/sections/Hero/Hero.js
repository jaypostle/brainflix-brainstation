import React from 'react'

function Hero({videoDetails}) {

  console.log(videoDetails);
  return (
    <section className="section--hero">
      {/* <video className='hero__video' src={videoDetails[0].video}> */}
        <img src={videoDetails[0].image} alt={videoDetails[0].title} />
      {/* </video> */}
      <div className="video-controls">
        {videoDetails[0].duration}
        {/* Play button */}
        {/* Scrubber */}
        {/* Expand */}
        {/* Volume Control */}
      </div>
    <p>placeholder banner</p>    
</section>
  )
}

export default Hero