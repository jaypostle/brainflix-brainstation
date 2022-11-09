import React from 'react'
import "./NextVideos.scss";
// import { Link } from 'react-router-dom';

function NextVideos({videoList, onVideoClick}) {


  return (
    <section className="section--next-videos">
      <h4>Next Videos</h4>
      <div className="videos-list">

      {/* {console.log(VideoList)} */}
      {videoList && videoList.map((video) => {
        return(
          <article className="next-video" key={video.id}>
          {/* <Link to={`/videos/${video.id}`}> */}
            <div className='next-video__thumbnail' alt={video.title} 
              onClick={(event) => {
                onVideoClick(event, video.id);
              }}
              style={{
                backgroundImage: `url(${video.image})`
              }}
            >

            </div>
          {/* </Link> */}
        
          <div className="next-video__meta-data">
            <h3 className="next-video__title">{video.title}</h3>
            <p className="next-video__creator">{video.channel}</p>
          </div>
        </article>
        )})}
        
        
      </div>
  
    </section>
  )
}

export default NextVideos