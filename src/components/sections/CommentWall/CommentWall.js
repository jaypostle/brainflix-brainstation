import React from 'react'
import Avatar from '../../atoms/Avatar/Avatar';

function CommentWall({videoComments}) {
  return (
    <section className="section--comments">
            <h4>3 Comments</h4>
            <div className="comment-feed">
                <div className="comment-feed__form-wrapper">
                    <Avatar />
                    <form className="comment-feed-form" >
                        {/* <label htmlFor="name">
                            Name:
                            <input type="text" className="comment-feed__input-text comment-feed__input--name" id="name" name="name" placeholder="Enter your name"/>
                        </label> */}
                        <label htmlFor="comment" className='comment-feed__label'>
                            Join the conversation:
                            <input type="text" className="comment-feed__input-text comment-feed__input--comment" id="comment" name="comment" placeholder="Add a new comment"/>
                        </label>
                        <input type="submit" className="primary-cta comment-feed__submit" value="Comment"/>
                    </form>
                </div>
                <div className="comment-feed-waterfall">

                    {videoComments && videoComments.map((comment) => {
                        return(
                            <article className="comment-feed-waterfall__article" key={comment.id}>
                                <Avatar />
                                {/* <img src="" alt="" className="comment-feed-waterfall__avatar" /> */}
                                <div className="comment-feed-waterfall__text-info">
                                    <div className="comment-feed-waterfall__meta-info">
                                        <span className="comment-feed-waterfall__author">{comment.name}</span><span className="comment-feed-waterfall__date">{comment.timestamp}</span>
                                    </div>
                                    <p className="comment-feed-waterfall__comment">{comment.comment}</p>
                                </div>
                            </article>
                        )
                    })}
                    
                </div>
            </div>
        </section>   
  )
}

export default CommentWall