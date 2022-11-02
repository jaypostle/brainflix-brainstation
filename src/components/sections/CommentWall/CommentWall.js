import React from 'react'
import Avatar from '../../atoms/Avatar/Avatar';

function CommentWall() {
  return (
    <section className="section--comments">
            <h4>3 Comments</h4>
            <div className="comment-feed">
                <div className="comment-feed__form-wrapper">
                    <Avatar />
                    {/* <form className="comment-feed__form">
                        <label for="name">Name:</label>
                        <input className="comment-feed__input-text comment-feed__input--name" type="text" id="name" name="name" placeholder="Enter your name">
                        <label for="comment">Comment:</label>
                        <input className="comment-feed__input-text comment-feed__input--comment" type="textarea" rows="3" cols="50" id="comment" name="comment" placeholder="Add a new comment">
                        <!-- <textarea id="comment" name="comment" cols="30" rows="5" placeholder="Add a new comment"></textarea> -->
                        <input className="primary-cta comment-feed__submit" type="submit" value="Comment">
                    </form> */}
                </div>
                <div className="comment-feed__waterfall">
                </div>
            </div>
        </section>   
  )
}

export default CommentWall