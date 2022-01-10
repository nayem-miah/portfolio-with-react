import React from 'react';

const NewsLetter = () => {
    return (

        <section id="" class="newsletter-bg-black">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 m-auto text-center">
                        <div class="wrap">
                            <h2 class="top-text">NEWSLETTER</h2>
                            <h2 class="head-text">STAY UP TO DATE, SUBSCRIBE <br/> TO THE FREE <span
                                    class="c-text">NEWSLETTER !</span></h2>
                        </div>

                        <div class="cta-form">
                            <form action="#">
                                <input type="email" placeholder="Enter Your Email.."/>
                                <a href="#" class="subscribe-btn">Subscribe <i class="fal fa-comments-alt"></i></a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;