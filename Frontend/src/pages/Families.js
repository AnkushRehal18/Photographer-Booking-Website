import React from "react";
import { Link } from "react-router-dom"
import '../components/filecss.css';
import familyImage from './families.jpg';

function Families() {
    return (
        <>
            <section
                className="parallax"
                style={{
                    backgroundImage: `url(${familyImage})`,

                }}
            >
                <div className="photoText">
                    <h3 className="photofont">FAMILY PHOTOGRAPHY IN </h3>
                </div>
                <div className="bigtext">
                    <h2 className="photofont2">India</h2>
                </div>
            </section>

            {/* image and text section */}
            <section style={{ marginTop: "100px" }}>
                <div className="contianer">
                    <div className="row" style={{ marginLeft: "185px" }}>
                        <div className="col-lg-6">
                            <img src="/me-2.webp" alt="pic" style={{ height: "650px", width: "550px" }} />
                        </div>
                        <div class="col-lg-6">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className="text" style={{ color: "#b5651d", }}>fun & <br></br>stress <br></br>free</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <p style={{ color: "#cd853f", fontFamily: "cursive", fontSize: "17px" }}>We strive to ensure your entire session is as low-stress and relaxed as possible.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <p style={{ color: "#cd853f", fontFamily: "cursive", fontSize: "17px" }}>Our photographers as skilled at working with big families, teenagers, toddlers and everything in between.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <p style={{ color: "#cd853f", fontFamily: "cursive", fontSize: "17px" }}>We want the memories you make during your photoshoot to be just as good as the memories we capture.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <p style={{ color: "#cd853f", fontFamily: "cursive", fontSize: "17px" }}>Lets go have some fun!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="meetlink" >
                <Link to='/Meetteam' className="nav-link book-today1">MEET THE TEAM</Link>
            </div>

            <section className="textcet">
                <div className="text-center">
                    <p className="colorprice">PRICING GUIDE FOR</p>
                    <p className="colorprice">FAMILIES & FAMILIES REUNION</p>
                    <p style={{ color: "#cd853f" }}> Each package includes an edited gallery of high resolution digital photos and your
                        choice of location from our curated list of favorite spots in India</p>
                </div>
            </section>

            {/* card section */}

            <section style={{ marginTop: "90px" }}>

                <div className="container-fluid">
                    <div className="row ">
                        <div class="col-lg-3 mb-3 mb-sm-0 ">
                            <div class="card contstyle" >
                                <div class="card-body" style={{ textAlign: "center" }}>
                                    <h5 class="card-title" >Well</h5>
                                    <h5 class="card-title" >Captured</h5>
                                    <p class="card-text">Perfect for squeezing in a short & sweet session during your vacation.</p>
                                    <p>30<br></br>MINUTES</p>
                                    <br></br>
                                    <p>20+<br></br>IMAGES</p>
                                    <p>STARTING AT <br></br>$350</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card contstyle2">
                                <div class="card-body" style={{ textAlign: "center" }}>
                                    <h5 class="card-title">Memory</h5>
                                    <h5 class="card-text">Maker</h5>
                                    <p>Includes plenty of time for adventure, play, and making lots of  memories.</p>
                                    <p>60-90 <br></br>MINUTES</p>
                                    <br></br>
                                    <p>40+<br></br>IMAGES</p>
                                    <p>STARTING AT<br></br>$575</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card contstyle3">
                                <div class="card-body" style={{ textAlign: "center" }}>
                                    <h5 class="card-title">Living</h5>
                                    <h5 class="card-title">the Dream</h5>
                                    <p class="card-text">These are the most coveted spots in Zion with the most stunning views.</p>
                                    <p>90 <br></br>MINUTES</p>
                                    <br></br>
                                    <p>50+ <br></br>IMAGES</p>
                                    <p>STARTING<br></br>$675</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card contstyle3">
                                <div class="card-body" style={{ textAlign: "center" }}>
                                    <h5 class="card-title">MORE THE</h5>
                                    <h5 class="card-title">MERRIER</h5>
                                    <p class="card-text">Fun for everyone. Easy locations for 2 or more families and larger groups.</p>
                                    <p>30<br></br>MINUTERS</p>
                                    <br></br>
                                    <p>30+<br></br>IMAGES</p>
                                    <p>STARTING AT<br></br>$450</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* carousal and text */}

            <section style={{marginTop:"150px"}}>
                <h1>COME AND EXPLORE</h1>
                <h1>India With Us</h1>
            </section>

            <div className="row">
                <div className="col-log-6">
                    <div className="row">
                        <div className="col-lg-6">
                <p>We know the best spots - from the most iconic scenery to the locals only gems. Over the years we’ve used our local know-how and love of all things nature to scout locations with that unique Zion & Southern Utah feel.</p>
                    <p>We have options that are easy access, off the beaten path, and big on adventure.</p>
                    <p>Our team is ready and waiting to help you choose the perfect location to capture your family.</p>
                    </div>
                    <div className="col-lg-6">
                    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./hiking.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./Rajasthan.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./touries.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>
                    </div>
                    </div>

                    </div>
                    

        </>
    )
}

export default Families