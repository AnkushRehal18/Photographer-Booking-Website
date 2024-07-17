import React from "react";
import '../components/filecss.css';
import SuryagarhImage from './Suryagarh.jpg';
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <section
                className="parallax"
                style={{
                    backgroundImage: `url(${SuryagarhImage})`,

                }}
            >
                <div className="photoText">
                    <h3 className="photofont">PHOTOGRAPHING ADVENTURES IN</h3>
                </div>
                <div className="bigtext">
                    <h2 className="photofont2">India</h2>
                </div>
                <div className="bookbutton">
                    <button className="book-today">Book Today</button>
                </div>
            </section>
            <section className="overlay">
                <div className="secondsec">
                    <span className="secondsec1">
                        <Link to='/Families' class="nav-link"><u>FAMILIES</u></Link>
                        <Link to='/Couples' class="nav-link"><u>COUPLES</u></Link>
                        <Link to='/Purposals' class="nav-link"><u>SURPRISE PURPOSALS</u></Link>
                        <Link to='/Elopments' class="nav-link"><u>ELOPEMENTS</u></Link>
                    </span>
                </div>
            </section>
            {/* {image and text} */}
            <section>
                <div className="contianer">
                    <div className="row" style={{ marginLeft: "185px" }}>
                        <div className="col-lg-6">
                            <img src="/me-2.webp" alt="pic" style={{ height: "600px", width: "550px" }} />
                        </div>
                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-lg-12">
                                    <h3 style={{ color: "#8b4513", fontfamily: "Dancing Script, cursive;" }}>WE ARE A TEAM OF</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="text" style={{ color: "#b5651d", }}>local <br></br>photogs</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <p style={{ color: "#cd853f", fontFamily: "cursive", fontSize: "17px" }}>dedicated to capturing the majesty of Zion National
                                        Park and celebrating relationships through dynamic and adventure-driven images.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <p style={{ color: "#cd853f", fontFamily: "cursive", fontSize: "17px" }}>Our process is simple, straight-forward, and all about authenticity — ensuring you actually get to
                                        experience your memories as they happen, rather than stressing about the finer details.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 book-today1" >
                                    <Link to='/Meetteam' class="nav-link">MEET THE TEAM</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* card section */}

            <section style={{ marginTop: "120px" }}>

                <div className="container ">
                    <h2 className="textstyle">Easy as....</h2>
                    <div className="row ">
                        <div class="col-sm-4 mb-3 mb-sm-0 ">
                            <div class="card contstyle" >
                                <div class="card-body" style={{ textAlign: "center" }}>
                                    <h5 class="card-title" >1.</h5>
                                    <p class="card-text">CHOOSE A PRICING PACKAGE</p>
                                    <p>We have you covered - from capturing your family vacation memories
                                        or planning a romantic proposal to documenting a full Zion adventure.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card contstyle2">
                                <div class="card-body" style={{ textAlign: "center" }}>
                                    <h5 class="card-title">2.</h5>
                                    <p class="card-text">CHOOSE A PHOTOGRAPHER</p>
                                    <p>Our team of photogs are all Zion enthusiasts and experts — peruse
                                        our portfolios and choose the person who’s style you love and adore the most.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card contstyle3">
                                <div class="card-body" style={{ textAlign: "center" }}>
                                    <h5 class="card-title">3.</h5>
                                    <p class="card-text">BOOK YOUR SESSION!</p>
                                    <p>Once we receive your inquiry, we will be in touch ASAP to finalize all of the details — including
                                        sending you our Location Guide curated from years of experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contianer capturingof ">
                <div>
                    <p>CAPTURING ALL OF <br></br><span className="textstyle1">Life Adventures</span><br></br></p>
                </div>
            </section>

            {/* cards for photograph */}

            <section className="cardmany ">
                <div class="card" style={{width:"18rem"}} >
                    <img src="hiking.jpg" class="card-img-top" alt="..."style={{height:"212px"}} />
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <br></br>
                <div class="card" style={{width:"18rem"}} >
                    <img src="/desert.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}} >
                    <img src="/bike-ride.jpg" class="card-img-top" alt="..." style={{height:"212px"}}/>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}} >
                    <img src="/car-ride.jpg" class="card-img-top" alt="..."style={{height:"212px"}}/>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
