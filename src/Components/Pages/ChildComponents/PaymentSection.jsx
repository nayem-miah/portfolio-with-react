import React from 'react';

const PaymentSection = () => {
    return (
        <section id="Payment">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 part-1">
                        <div class="wrap">
                            <h1>SPECIFICATIONS</h1>
                            <h2>ALL OUR PAYMENT <span class="t-color">OPTIONS</span> </h2>
                        </div>
                    </div>
                    <div class="col-lg-7 part-2">
                        <div class="wrap">
                            <p>Accept payments, send payouts and settle funds, regardless of the country you operate in. Seamless API integration. Real-time card authentication.</p>
                        </div>a
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 item-1">
                        <div class="card text-center">
                            <div>
                                <i class="fas fa-ruler-combined"></i>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Payment Gateway</h4>
                                <p class="card-text text-justify">
                                A customer places an order on website by pressing the 'Submit Order' or equivalent button, or perhaps enters their card.
                                </p>
                                {/* <a class="btn" href="#">Read More</a> */}
                            </div>
                            <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="col-lg-4 item-2">
                        <div class="card text-center">
                            <div>
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Accept payments</h4>
                                <p class="card-text">
                                A payment gateway is software which facilitates, processes, and/or authorizes banking or credit card information to online retailers.
                                </p>
                                {/* <a class="btn" href="#">Read More</a> */}
                            </div>
                            <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="col-lg-4 item-3">
                        <div class="card text-center">
                            <div>
                                <i class="fas fa-paste"></i>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Apple Pay</h4>
                                <p class="card-text">
                                Apple Pay is a mobile payment and digital wallet service by Apple Inc. that allows users to make payments in person.
                                </p>
                                {/* <a class="btn" href="#">Read More</a> */}
                            </div>
                            <div class="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentSection;