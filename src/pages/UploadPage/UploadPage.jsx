import React from 'react';
import './UploadPage.scss';
import UploadDefault from '../../assets/images/Upload-video-preview.jpg';
import commentIcon from '../../assets/icons/add_comment.svg'
import { Link } from 'react-router-dom';

function UploadPage() {
  return (
    <section>
        <h2>Upload Video</h2>
        <div className="upload-container">
            <img src={UploadDefault} className="upload__video" alt="video upload thumbnail" ></img>
            <form className='upload__form'>
                <label htmlFor="">
                    Title Your Video <br />
                    <input type="text" className="upload__input--title" name='title' id="title" placeholder='Add a title to your video'/>
                </label>
                <label htmlFor="comment" className='comment-feed__label'>
                    Add a Video Description <br />
                    <textarea type="text" className="comment-feed__input-textarea comment-feed__input--comment" id="description" name="description" placeholder="Add a description to your video"/>
                </label>
                <button type="submit" className='primary-btn header-nav__button upload__btn' href="/">
                    <img src={commentIcon} alt="comment icon" />
                    Publish
                    <img className="hide-me" src={commentIcon} alt="comment icon" />
                </button>
            </form>
            <Link to="/" className='secondary-btn'>Cancel</Link>
        </div>
    </section>
  )
}

export default UploadPage