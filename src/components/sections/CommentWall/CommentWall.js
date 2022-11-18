import { React, useRef } from "react";
import Avatar from "../../atoms/Avatar/Avatar";
import "./CommentWall.scss";
import commentIcon from "../../../assets/icons/add_comment.svg";
import { formatDate } from "../../../utilities/utilities";
import axios from "axios";

function CommentWall({ videoComments }) {
  const formRef = useRef();

  console.log(videoComments);

  const postComment = async (name, comment) => {
    const newComment = {
      name: "Jayson Postle",
      comment,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/videos/:id/comments",
        newComment
      );
    } catch (error) {
      console.log(error);
    }
  };
  function handleAddComment(event) {
    event.preventDefault();

    const form = formRef.current;
    const comment = form.comment.value;

    if (comment === "") {
      alert("Please fill out a comment.");
      return;
    }

    // run the POST request

    // update the comments
  }
  return (
    <section className="section--comments">
      <h3>{videoComments.length} Comments</h3>
      <div className="comment-feed">
        <div className="comment-feed__form-wrapper">
          <Avatar />
          <form ref={formRef} className="comment-feed-form">
            {/* <label htmlFor="name">
                            Name:
                            <input type="text" className="comment-feed__input-text comment-feed__input--name" id="name" name="name" placeholder="Enter your name"/>
                        </label> */}
            <label htmlFor="comment" className="comment-feed__label">
              Join the conversation: <br />
              {/* </label> */}
              <textarea
                type="text"
                className="comment-feed__input-textarea comment-feed__input--comment"
                id="comment"
                name="comment"
                placeholder="Add a new comment"
              />
            </label>
            <button
              className="primary-btn header-nav__button comment-feed__submit"
              href="/"
            >
              <img src={commentIcon} alt="comment icon" />
              Comment
              <img className="hide-me" src={commentIcon} alt="comment icon" />
            </button>
          </form>
        </div>
        <div className="comment-feed-waterfall">
          {videoComments &&
            videoComments.map((comment) => {
              return (
                <article
                  className="comment-feed-waterfall__article"
                  key={comment.id}
                >
                  <Avatar />
                  {/* <img src="" alt="" className="comment-feed-waterfall__avatar" /> */}
                  <div className="comment-feed-waterfall__text-info">
                    <div className="comment-feed-waterfall__meta-info">
                      <span className="comment-feed-waterfall__author">
                        {comment.name}
                      </span>
                      <span className="comment-feed-waterfall__date">
                        {formatDate(comment.timestamp)}
                      </span>
                    </div>
                    <p className="comment-feed-waterfall__comment">
                      {comment.comment}
                    </p>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default CommentWall;
