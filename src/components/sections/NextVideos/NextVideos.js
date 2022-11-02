import React from 'react'
import VideoList from '../../../data/videos.json';
import "./NextVideos.scss";

function NextVideos() {
  return (
    <section className="section--next-videos">
      <h4>Next Videos</h4>
      <div className="videos-list">

      {/* {console.log(VideoList)} */}
      {VideoList && VideoList.map((video) => {
        return(
          <article className="next-video" key={video.id}>
          <img className='next-video__thumbnail' src={video.image} alt={video.title} />
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