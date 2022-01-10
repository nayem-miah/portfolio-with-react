import React from 'react';
import Header from './ChildComponents/Header';
import IntroSection from './ChildComponents/IntroSection';
import NewsLetter from './ChildComponents/NewsLatter';

const Project = () => {
    return (
        <>
        {/* Header section */}
            <Header></Header>

            {/* Intro  */}

            <IntroSection homeLink="Home" siteLink="Project"></IntroSection>


            {/* <!-- Portfolio items --> */}

        <section id="portfolio-items">

            <div class="container">
                
                <div class="row items">
                    <div class="col-lg-4 col-md-6 ">
                        <div class="wrap part-1">
                            <div class="img">
                                <img class="img-fluid" src="./img/portfolio/portfolio1.jpg" alt=""/>
                                <a href="single-portfolio.html"><i class="fas fa-eye"></i></a>
                            </div>

                            <h2 class="date">29 NOVEMBER 2019</h2>
                            <h2 class="heading_text">ARCHITECTURE, DIGITAL ART</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 ">
                        <div class="wrap part-2">
                            <div class="img">
                                <img class="img-fluid" src="./img/portfolio/portfolio2.jpg" alt=""/>
                                <a href="single-portfolio.html"><i class="fas fa-eye"></i></a>
                            </div>

                            <h2 class="date">29 NOVEMBER 2019</h2>
                            <h2 class="heading_text">ARCHITECTURE, DIGITAL ART</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 ">
                        <div class="wrap part-3">
                            <div class="img">
                                <img class="img-fluid" src="./img/portfolio/portfolio3.jpg" alt=""/>
                                <a href="single-portfolio.html"><i class="fas fa-eye"></i></a>
                            </div>

                            <h2 class="date">29 NOVEMBER 2019</h2>
                            <h2 class="heading_text">ARCHITECTURE, DIGITAL ART</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 ">
                        <div class="wrap part-4">
                            <div class="img">
                                <img class="img-fluid" src="./img/portfolio/portfolio4.jpg" alt=""/>
                                <a href="single-portfolio.html"><i class="fas fa-eye"></i></a>
                            </div>

                            <h2 class="date">29 NOVEMBER 2019</h2>
                            <h2 class="heading_text">ARCHITECTURE, DIGITAL ART</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 ">
                        <div class="wrap part-5">
                            <div class="img">
                                <img class="img-fluid" src="./img/portfolio/portfolio5.jpg" alt=""/>
                                <a href="single-portfolio.html"><i class="fas fa-eye"></i></a>
                            </div>

                            <h2 class="date">29 NOVEMBER 2019</h2>
                            <h2 class="heading_text">ARCHITECTURE, DIGITAL ART</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 ">
                        <div class="wrap part-6">
                            <div class="img">
                                <img class="img-fluid" src="./img/portfolio/portfolio6.jpg" alt=""/>
                                <a href="single-portfolio.html"><i class="fas fa-eye"></i></a>
                            </div>

                            <h2 class="date">29 NOVEMBER 2019</h2>
                            <h2 class="heading_text">ARCHITECTURE, DIGITAL ART</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 ">
                        <div class="wrap part-4">
                            <div class="img">
                                <img class="img-fluid" src="./img/portfolio/portfolio4.jpg" alt=""/>
                                <a href="single-portfolio.html"><i class="fas fa-eye"></i></a>
                            </div>

                            <h2 class="date">29 NOVEMBER 2019</h2>
                            <h2 class="heading_text">ARCHITECTURE, DIGITAL ART</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 ">
                        <div class="wrap part-5">
                            <div class="img">
                                <img class="img-fluid" src="./img/portfolio/portfolio5.jpg" alt=""/>
                                <a href="single-portfolio.html"><i class="fas fa-eye"></i></a>
                            </div>

                            <h2 class="date">29 NOVEMBER 2019</h2>
                            <h2 class="heading_text">ARCHITECTURE, DIGITAL ART</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 ">
                        <div class="wrap part-6">
                            <div class="img">
                                <img class="img-fluid" src="./img/portfolio/portfolio6.jpg" alt=""/>
                                <a href="single-portfolio.html"><i class="fas fa-eye"></i></a>
                            </div>

                            <h2 class="date">29 NOVEMBER 2019</h2>
                            <h2 class="heading_text">ARCHITECTURE, DIGITAL ART</h2>
                        </div>
                    </div>
                </div>
            
            </div>

        </section>

        {/* News Latter */}
        
        <NewsLetter></NewsLetter>

        </>
    );
};

export default Project;