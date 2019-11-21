import React from 'react';
import '../App.css';

export const Carousel = () => (

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                
    <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    
    <div className="carousel-inner">

        <div className="carousel-item active">
            <div className="container">
                <div className="row text-center text-lg-left">
                    <div className="col-lg-6 col-md-4 col-6">
                        <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://image.businessinsider.com/5982deea4fc3c057008b49c8" alt="Paris, France" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-4 col-6">
                        <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://image.businessinsider.com/5ba8ffb639ce1a32438b456b" alt="Bangkok, Thailand" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-4 col-6">
                        <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://image.businessinsider.com/59c2edaa38d20d20008b8eb7" alt="London, UK" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-4 col-6">
                        <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://image.businessinsider.com/5ba16bdf0ce5f592208b535f" alt="Dubai, UAE" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="carousel-item">
            <div className="container">
                <div className="row text-center text-lg-left">
                    <div className="col-lg-6 col-md-4 col-6">
                        <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://image.businessinsider.com/5ba900f891ff6dd9428b456a" alt="Singapore" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-4 col-6">
                        <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://image.businessinsider.com/56aa8a7f58c3238c008b61fa" alt="Kuala Lumpur, Malaysia" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-4 col-6">
                        <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://image.businessinsider.com/5ba90376ea40025e428b4567" alt="Istanbul, Turkey" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-4 col-6">
                        <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://image.businessinsider.com/5ae8736f19ee86db028b498f" alt="Tokyo, Japan" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="carousel-item">
            <div className="container">
                <div className="row text-center text-lg-left">
                    <div className="col-lg-6 col-md-4 col-6">
                        <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://image.businessinsider.com/5b8472212be4ab1c008b57cd" alt="Antalya, Turkey" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-4 col-6">
                        <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://image.businessinsider.com/5b1e82111ae6621c008b4f61" alt="Seoul, South Korea" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-4 col-6">
                        <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://image.businessinsider.com/5ab137f5b085c0d3118b4a89" alt="Phuket, Thailand" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-4 col-6">
                        <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://image.businessinsider.com/5b6ac97304f1622a008b4c8d" alt="Makkah, Saudi Arabia" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>

</div>

);