import React from 'react';
import logo from '../../Img/2.png'
const Footer = () => {
    return (
        <section id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 part-1">
                        <div class="wrap">
                            <img class="img-fluid logo" src={logo} alt=""/>
                            <div class="text">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, atque nisi cum quis dolore dolorem quam id suscipit porro quo?</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 part-2">
                        <div class="wrap">
                            <h2>OUR MISSION</h2>
                            <hr/>
                            <ul>
                                <li>Digital Marketing.</li>
                                <li>Affiliate Marketing.</li>
                                <li>New Product Review.</li>
                                <li>Email Marketing.</li>
                                <li>Complete SEO.</li>
                                <li>Web Development.</li>
                                <li>Web Design.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 part-3">
                        <div class="wrap">
                            <h2>IMPORTANT LINKS</h2>
                            <hr/>
                            <ul>
                                <li><a href="#">Disclaimer</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Advertise</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 part-4">
                        <div class="wrap">
                            <h2>Work Us</h2>
                            <hr/>
                            <div class="images d-flex">
                                
                                <img class="img-fluid" src="./img/pngwing.png" alt=""/>
                                <img class="img-fluid" src="./img/fiverr.png" alt=""/>
                                <img class="img-fluid" src="./img/linkedin.png" alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col text-center copy_write">
                        <p>&#169; Nayem - 2023</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;