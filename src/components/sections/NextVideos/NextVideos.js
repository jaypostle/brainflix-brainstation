import React from 'react'
import "./NextVideos.scss";

function NextVideos({videoList, onVideoClick}) {


  return (
    <section className="section--next-videos">
      <h4>Next Videos</h4>
      <div className="videos-list">

      {/* {console.log(VideoList)} */}
      {videoList && videoList.map((video) => {
        return(
          <article className="next-video" key={video.id}>
          <img 
            className='next-video__thumbnail' 
            src={video.image} 
            alt={video.title} 
            onClick={(event) => {
              onVideoClick(event, video.id);
            }}
            />
          <div className="next-video__meta-data">
            <p className="next-video__title">{video.title}</p>
            <p className="next-video__creator">{video.channel}</p>
          </div>
        </article>
        )})}
        
        
      </div>
  
    </section>
  )
}

export default NextVideos