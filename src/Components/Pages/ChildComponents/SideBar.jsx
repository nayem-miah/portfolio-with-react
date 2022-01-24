import React from 'react';
import amitImg from '../../Img/single-blog/amit.png'

const SideBar = () => {
    return (
        <div class="col-lg-4 part-2">
        <div class="wrap-1">
            <div class="text">
                <h2>
                    ABOUT US.
                </h2>
            </div>
            <div class="img-tag">
                <img class="img-1 img-fluid" src={amitImg} alt=""/>
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
    );
};

export default SideBar;