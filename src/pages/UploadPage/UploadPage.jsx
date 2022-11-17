import { React, useRef } from "react";
import "./UploadPage.scss";
import UploadDefault from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function UploadPage() {
  const notify = () => toast("Video Uploaded.");

  let navigate = useNavigate();

  const uploadVideo = async (title, description) => {
    const newVideo = {
      title: title,
      channel: description,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/videos/",
        newVideo
      );
    } catch (error) {
      console.log(error);
    }
  };

  const formRef = useRef();

  function handleFormSubmit(event) {
    event.preventDefault();

    const form = formRef.current;
    const title = form.title.value;
    const description = form.description.value;

    if (title === "" || description === "") {
      alert("Please fill out all form fields");
      return;
    }

    uploadVideo(title, description);
    form.reset();
    notify();
   
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }
  

  /**
   * On submit
   * get request of the video you just posted
   * that sets state of defaultVideo using the handleChange function you pass down
   * 
   */

  return (
    <>
      <section>
        <hr className="upload__hr" />
      </section>
      <section className="section--upload">
        <h1>Upload Video</h1>
        <div className="upload-container">
          <form className="upload__form" ref={formRef}>
            <div className="upload__video-wrapper">
              <label htmlFor="image" className="comment-feed__label">
                Video Thumbnail
              </label>
              <br />
              <img
                src={UploadDefault}
                className="upload__video"
                alt="video upload thumbnail"
              ></img>
            </div>
            <div className="upload__text-wrapper">
              <label
                htmlFor="title"
                className="comment-feed__label upload__label"
              >
                Title Your Video <br />
                <input
                  type="text"
                  className="upload__input--title"
                  name="title"
                  id="title"
                  placeholder="Add a title to your video"
                />
              </label>
              <label
                htmlFor="comment"
                className="comment-feed__label upload__label upload__label--description"
              >
                Add a Video Description <br />
                <textarea
                  type="text"
                  className="comment-feed__input-textarea comment-feed__input--comment upload__input-description"
                  id="description"
                  name="description"
                  placeholder="Add a description to your video"
                />
              </label>
            </div>
            <div className="upload__buttons">
              <button
                type="submit"
                className="primary-btn upload__btn"
                onClick={(event) => handleFormSubmit(event)}
              >
                <img src={publishIcon} alt="comment icon" />
                Publish
                <img className="hide-me" src={publishIcon} alt="comment icon" />
              </button>

              <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <Link to="/" className="secondary-btn upload__secondary-btn">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default UploadPage;
