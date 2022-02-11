import React from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import useAuth from "../../../Context/useAuth";

const BlogPostData = (props) => {
  const { isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="grow" />;
  }
  const { _id, BlogTitle, ImgUrl, data, date } = props.data;
  const DescriptionSlice = parse(data.slice(0, 260));
  const socialIconUrl = `http://localhost:3000/blog/single-blog/${_id}`; // Need to create live link....
  const shareUrl = `https://amitjs.com/single-blog/${_id}`;
  console.log(shareUrl);

  return (
    <div class="single-item">
      <div class="overlay">
        <img class="img-fluid" src={ImgUrl} alt="" />
        <h2 class="event">USA EVENT</h2>
      </div>
      <div class="hadding-text">
        <Link to={`/single-blog/${_id}`}>{BlogTitle}</Link>
      </div>
      <div class="tag-point d-flex align-items-center">
        <img class="img-fluid" src={"authorImg"} alt="" />
        <p>Amit Biswas</p>

        <span>
          <i class="far fa-calendar-alt"></i>
        </span>
        <p> {date}</p>
      </div>
      <div class="content">
        <p>{DescriptionSlice}</p>
      </div>
      <div class="read-more-btn d-flex align-items-center justify-content-between">
        <Link className="btn btn-read-more" to={`/single-blog/${_id}`}>
          Read More
        </Link>

        <div className="mr-4 SocialIcon">
          <span>
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
          </span>
          <span>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon size={40} round={true} />
            </LinkedinShareButton>
          </span>
          <span>
            <TwitterShareButton url={shareUrl}>
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
          </span>
          <span>
            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>
          </span>
          <span>
            <RedditShareButton url={shareUrl}>
              <RedditIcon size={40} round={true} />
            </RedditShareButton>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogPostData;
