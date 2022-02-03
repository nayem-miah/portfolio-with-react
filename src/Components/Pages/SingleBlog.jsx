import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./ChildComponents/Footer";
import Header from "./ChildComponents/Header";
import IntroSection from "./ChildComponents/IntroSection";
import SideBar from "./ChildComponents/SideBar";
import parse from 'html-react-parser';
import commentImg from "../Img/commentImg.png";
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "react-bootstrap";

const SingleBlog = () => {
  const [update, setUpdate] = useState("");
  const [comment, setComment] = useState([]);
  const [uniqueSlug, setUniqueSlug] = useState([]);
  console.log(uniqueSlug);
  const { slug } = useParams();

  const SucccessMassage = "Data Update Successful!";
  const UnSuccessfulMassage = "Data Update Error!";
  const todayDate = new Date().toISOString().slice(0, 10);
  const shareUrl = `https://quizbari.com/${slug}`;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm();

  // Load Unique Blog ...

  useEffect(() => {
    const url = `http://localhost:5000/all-blog-post/${slug}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUniqueSlug(data[0]));
  }, [uniqueSlug]); // Dependence is on.
  // }, []); // Dependence is on.

  // Load comment post .....
  useEffect(() => {
    const url = `http://localhost:5000/comment`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComment(data));
  // }, []); // Dependence is on.
  }, [comment]); // Dependence is on.

  // Load comment function
  const commentSlugId = comment;
  const slugFunction = () => {
    return commentSlugId.filter((x) => x.slugId);
  };
  const newSlugId = slugFunction();

  // Submit comment to server...
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/comment", data).then((res) => {});
    reset();

    if (data) {
      setUpdate(SucccessMassage);
    } else {
      setUpdate(UnSuccessfulMassage);
    }
  };

  // =========== END ===========//

  return (
    <>
      {/* Header Section */}

      <Header></Header>

      {/* Intro Section */}

      <IntroSection homeLink="Home" siteLink="Single Blog"></IntroSection>

      {/* Siblge Blog Section */}

      <section class="blog_item ">
        <div class="container">
          <div class="row section-1">
            <div class="col-lg-8 part-1">
              <div class="wrap-1">
                <div class="img">
                  <img class="img-fluid img-1" src={uniqueSlug.ImgUrl} alt="" />
                </div>
                <div class="text-file">
                  <h2 class="headding-text">{uniqueSlug.BlogTitle}</h2>
                  <div class="intro-box d-flex align-items-center ">
                    <img
                      class="img-fluid img-2"
                      src="./img/single-blog/author4.png"
                      alt=""
                    />

                    <a>Amit Biswas</a>
                    <i class="far fa-calendar-alt"></i>
                    <a> {uniqueSlug.date}</a>
                    <i class="fas fa-history"></i>
                    <a class="read"> 03 MIN READ</a>
                  </div>
                  <p class="text">{uniqueSlug.DescriptionPart1}</p>
                  <div class="testimonial">
                    <div class="content-bar">
                      <span>
                        <i class="fas fa-quote-left"></i>
                      </span>
                      {/* <h2 class="name">JHONE HARRY</h2> */}
                      <h2 class="comment">{uniqueSlug.DescriptionPart2}</h2>
                    </div>
                  </div>
                  <p class="text pb-5">{uniqueSlug.DescriptionPart3}</p>
                 
                      <div>
                      {parse(`${uniqueSlug.data}`)}
                      </div>
                                  
                </div>
                <div class="related_tag">
                  <div class="wrap-2 d-md-flex d-block justify-content-between align-items-center">
                    <div class="text">
                      <h2>RELATED TAGS</h2>
                      <div class="tag">
                        <a href="#">Bussiness</a>
                        <a href="#">Creative</a>
                        <a href="#">Agency</a>
                      </div>
                    </div>
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
                <hr />

                {/* <!-- Next and preview zoon --> */}

                {/* <div class="next-prev d-flex justify-content-between">
                  <div class="prev">
                    <a href="#">Prev Post</a>
                    <h2>TIPS ON MINIMALIST</h2>
                  </div>
                  <div class="next text-right">
                    <a href="#">Next Post</a>
                    <h2>LESS IS MORE</h2>
                  </div>
                </div>
                <hr /> */}

                {/* <!-- Comment Zoon --> */}

                <div class="comment-zoon">
                  {newSlugId.map((e) => {
                    if (e.slugId == slug) {
                      console.log(e);
                      return (
                        <div className="mt-5">
                          <div class="wrap">
                            <div class="d-block d-md-flex">
                              <img class="img-fluid" src={commentImg} alt="" />
                              <div class="comment">
                                <div class=" ">
                                  <h2 class="name">{e.Name}</h2>
                                </div>
                                <p class="comment-text">{e.Comment}</p>
                              </div>
                            </div>
                          </div>
                          {/* <div class="wrap reply-main  mt-3">
                        <div class="d-flex ml-0 ml-md-5">
                          <img class="img-fluid" src="./img/am.jpg" alt="" />
                          <div class="comment">
                            <div class="d-flex justify-content-between">
                              <h2 class="name">Amit Biswas</h2>
                              <a class="reply" href="#">
                                Reply
                              </a>
                            </div>
                            <p class="comment-text">
                              It doesn’t matter if you want to use a solid color,
                              image pattern oren one your favorite across the
                              entire background of your site, X lets you upload or
                              choose an image color instantly
                            </p>
                          </div>
                        </div>
                      </div> */}
                        </div>
                      );
                    }
                  })}

                  <div class="leave-comment">
                    <h2>LEAVE A COMMENT</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div class="form-group">
                        <input
                          required
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Name Here"
                          {...register("Name", {
                            Data: "value",
                            required: true,
                          })}
                        />
                        <input
                          required
                          type="email"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Email Here"
                          {...register("Email", {
                            Data: "value",
                            required: true,
                          })}
                        />
                        <textarea
                          class="w-100 massage"
                          name=""
                          id=""
                          placeholder="Comment Here"
                          cols="30"
                          rows="10"
                          {...register("Comment", {
                            Data: "value",
                            required: true,
                          })}
                        ></textarea>
                      </div>
                      <Button
                        className="btn-send"
                        variant="primary"
                        type="submit"
                        onClick={() => {
                          setValue("date", todayDate);
                          setValue("slugId", slug);
                        }}
                      >
                        Submit
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <SideBar></SideBar>

            <div class="shape">
              <img src="./img/single-blog/inner-bg1.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default SingleBlog;
