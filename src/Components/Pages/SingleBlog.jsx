import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './ChildComponents/Header';
import IntroSection from './ChildComponents/IntroSection';

const SingleBlog = () => {
    const {Slug}=useParams();
    const [uniqueSlug, setUniqueSlug]= useState({});

    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${Slug}`; // Url of single blog. try: http://localhost:3000/single-blog/1
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=> setUniqueSlug(data));
    },[])
  
    return (
        <>
        {/* Header Section */}

        <Header></Header>

        {/* Intro Section */}

        <IntroSection homeLink='Home' siteLink='Single Blog'></IntroSection>

        {/* Siblge Blog Section */}

        <section class="blog_item ">
            <div class="container">
                <div class="row section-1">
                    <div class="col-lg-8 part-1">
                        <div class="wrap-1">
                            <div class="img">
                                <img class="img-fluid img-1" src="./img/blog-1.jpg" alt=""/>
                            </div>
                            <div class="text-file">
                                <h2 class="headding-text">{uniqueSlug.username}
                                </h2>
                                <div class="intro-box d-flex align-items-center ">

                                    <img class="img-fluid img-2" src="./img/single-blog/author4.png" alt=""/>

                                    <a href="#">Amit Biswas</a>
                                    <i class="far fa-calendar-alt"></i><a href="#"> 28 SEPTEMBER</a>
                                    <i class="fas fa-history"></i><a class="read" href="#"> 01 MIN READ</a>
                                </div>
                                <p class="text">A Campaign Manager Or Campaign Director Is A Paid Or Volunteer
                                    Individual Whose Role Is To Coordinate A Political Campaign's Operations Such As
                                    Fundraising, Advertising, Polling, Getting Out The Vote With Direct Contact To The
                                    Public.Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It Has
                                    Roots In A Piece Of Classical Latin Literature From 45 BC, Making It Over 2000 Years
                                    Old. Richard McClintock, A Latin Professor At Hampden-Sydney College In Virginia,
                                    Looked Up One Of The More Obscure Latin Words, Consectetur, From A Lorem Ipsum
                                    Passage, And Going Through The Cites Of The Word In Classical Literature, Discovered
                                    The Undoubtable Source. Lorem Ipsum Comes From Sections 1.10.32 And 1.10.33 Of "De
                                    Finibus Bonorum Et Malorum" (The Extremes Of Good And Evil) By Cicero, Written In 45
                                    BC. This Book Is A Treatise On The Theory Of Ethics, Very Popular During The
                                    Renaissance. The First Line Of Lorem Ipsum, "Lorem Ipsum Dolor Sit Amet..", Comes
                                    From A Line In Section 1.10.32.</p>
                                <div class="testimonial">
                                    <div class="content-bar">
                                        <span><i class="fas fa-quote-left"></i></span>
                                        <h2 class="name">JHONE HARRY</h2>
                                        <h2 class="comment">THE 5 RULES OF DESIGN COMPOSITION AND LAYOUT DOLOR SIT AMET
                                            OUR ADIPISCING ELIT.</h2>
                                    </div>
                                </div>
                                <p class="text">Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It
                                    Has Roots In A Piece Of Classical Latin Literature From 45 BC, Making It Over 2000
                                    Years Old. Richard McClintock, A Latin Professor At Hampden-Sydney College In
                                    Virginia, Looked Up One Of The More Obscure Latin Words, Consectetur,</p>
                                <h2 class="headding-text">HOW CAMPAIGN FUNDS ARE RELEASED</h2>
                                <p class="text">From A Lorem Ipsum Passage, And Going Through The Cites Of The Word In
                                    Classical Literature, Discovered The Undoubtable Source. Lorem Ipsum Comes From
                                    Sections 1.10.32 And 1.10.33 Of "De Finibus Bonorum Et Malorum" (The Extremes Of
                                    Good And Evil) By Cicero, Written In 45 BC. This Book Is A Treatise On The Theory Of
                                    Ethics, Very Popular During The Renaissance. The First Line Of Lorem Ipsum, "Lorem
                                    Ipsum Dolor Sit Amet..", Comes From A Line In Section 1.10.32.Section 1.10.32.</p>
                                <br/>
                                <p class="text pb-5">Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text.
                                    It Has Roots In A Piece Of Classical Latin Literature From 45 BC, Making It Over
                                    2000 Years Old. Richard McClintock, A Latin Professor At Hampw</p>
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
                                    <div class="social-icon">
                                        <a href="#"><i class="fab fa-facebook-square"></i></a>
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                        <a href="#"><i class="fab fa-twitter-square"></i></a>
                                    </div>

                                </div>
                            </div>
                            <hr/>

                            {/* <!-- Next and preview zoon --> */}

                            <div class="next-prev d-flex justify-content-between">
                                <div class="prev">
                                    <a href="#">Prev Post</a>
                                    <h2>TIPS ON MINIMALIST</h2>
                                </div>
                                <div class="next text-right">
                                    <a href="#">Next Post</a>
                                    <h2>LESS IS MORE</h2>
                                </div>
                            </div>
                            <hr/>

                            {/* <!-- Comment Zoon --> */}

                            <div class="comment-zoon">
                                <div class="wrap">
                                    <div class="d-block d-md-flex">
                                        <img class="img-fluid" src="./img/single-blog/Comment_1.jpg" alt=""/>
                                        <div class="comment">
                                            <div class="d-flex justify-content-between">
                                                <h2 class="name">JENIFER LOFEZ</h2>
                                                <a class="reply" href="#">Reply</a>
                                                
                                            </div>
                                            <p class="comment-text">
                                                It doesn’t matter if you want to use a solid color, image pattern oren
                                                one your favorite across the entire background of your site, X lets you
                                                upload or choose an image color instantly
                                            </p>
                                        </div>

                                    </div>

                                </div>
                                <div class="wrap reply-main  mt-3">
                                    <div class="d-flex ml-0 ml-md-5">
                                        <img class="img-fluid" src="./img/am.jpg" alt=""/>
                                        <div class="comment">
                                            <div class="d-flex justify-content-between">
                                                <h2 class="name">Amit Biswas</h2>
                                                <a class="reply" href="#">Reply</a>
                                            </div>
                                            <p class="comment-text">
                                                It doesn’t matter if you want to use a solid color, image pattern oren
                                                one your favorite across the entire background of your site, X lets you
                                                upload or choose an image color instantly
                                            </p>
                                        </div>

                                    </div>

                                </div>
                                <div class="leave-comment">
                                    <h2>LEAVE A COMMENT</h2>
                                    <form>
                                        <div class="form-group">
                                        
                                          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name Here"/>
                                          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Email Here"/>
                                          <textarea class="w-100 massage" name="" id="" placeholder="Comment Here"  cols="30" rows="10"></textarea>
                                        </div>
                                        <a class="btn btn-send" href="#">Comment</a>
                                       
                                      </form>
                                      
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-4 part-2">
                        <div class="wrap-1">
                            <div class="text">
                                <h2>
                                    ABOUT US.
                                </h2>
                            </div>
                            <div class="img-tag">
                                <img class="img-1 img-fluid" src="./img/single-blog/author1.png" alt=""/>
                                <h2>CREATIVE LEAD</h2>
                                <img class="img-2 img-fluid" src="./img/signature.png" alt=""/>
                                <p>Hello I Am Amit Biswas -Powerful Pointing Has No Control About The Blind Texts It Is
                                    An Almost Unorthographic Life One Day However A Small Line Of Blind Text By The Name
                                </p>
                                <div class="social-icon">
                                    <a href="#"><i class="fab fa-facebook-square"></i></a>
                                    <a href="#"><i class="fab fa-linkedin"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-twitter-square"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="wrap-2">
                            <div class="text">
                                <h2>
                                    RECENT POSTS .
                                </h2>
                            </div>
                            <div class="items">
                                <div class="item d-flex justify-content-center align-content-center ">
                                    <img class="img-fluid" src="./img/single-blog/recent-post1.jpg" alt=""/>
                                    <a href="#">WAVES FLUNG THEMSELVES AT THE BLUE EVENING.</a>
                                </div>
                            </div>
                            <div class="items">
                                <div class="item d-flex justify-content-center align-content-center ">
                                    <img class="img-fluid" src="./img/single-blog/recent-post2.jpg" alt=""/>
                                    <a href="#">WAVES FLUNG THEMSELVES AT THE BLUE EVENING.</a>
                                </div>
                            </div>
                            <div class="items">
                                <div class="item d-flex justify-content-center align-content-center ">
                                    <img class="img-fluid" src="./img/single-blog/recent-post3.jpg" alt=""/>
                                    <a href="#">WAVES FLUNG THEMSELVES AT THE BLUE EVENING.</a>
                                </div>
                            </div>
                            <div class="items">
                                <div class="item d-flex justify-content-center align-content-center ">
                                    <img class="img-fluid" src="./img/single-blog/recent-post4.jpg" alt=""/>
                                    <a href="#">WAVES FLUNG THEMSELVES AT THE BLUE EVENING.</a>
                                </div>
                            </div>

                        </div>
                        <div class="wrap-3">
                            <div class="text">
                                <h2>
                                    CATEGORIES .
                                </h2>
                            </div>
                            <div class="category">
                                <ul>
                                    <li><a href="#">Lifestyle (35)</a></li>
                                    <li><a href="#">Travel (15)</a></li>
                                    <li><a href="#">Personal Life (23)</a></li>
                                    <li><a href="#">Medical (13)</a></li>
                                    <li><a href="#">Education (05)</a></li>
                                    <li><a href="#">DESIGN (10)</a></li>
                                </ul>
                            </div>

                        </div>
                       




                    </div>
                    <div class="shape">
                        <img src="./img/single-blog/inner-bg1.svg" alt=""/>
                    </div>
                </div>

            </div>
        </section>
            
        </>
    );
};

export default SingleBlog;