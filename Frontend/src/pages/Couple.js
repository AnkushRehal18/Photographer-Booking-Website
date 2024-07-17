import React from "react";
import '../components/filecss.css';
import coupleImage from './Couple1.jpg';
import { Link } from "react-router-dom";
import Uppertext from "../components/Uppertext";
import Textcarousalmoving from "../components/Text_carousal_moving";

function Couple() {
  return (
    <>
      <section
        className="parallax"
        style={{
          backgroundImage: `url(${coupleImage})`,

        }}
      >
        <div className="photoText">
          <h3 className="photofont">PHOTOGRAPHING COUPLES IN </h3>
        </div>
        <div className="bigtext">
          <h2 className="photofont2">India</h2>
        </div>
      </section>

      {/* card section with image */}
      <section className="imgtext" >
        <div class="card mb-3 border-0" style={{ width: "900px" }}>
          <div class="row g-0">
            <div class="col-md-5">
              <div class="card-body">
                <h5 className="card-title text1" style={{ color: "#b5651d", }}>fun and stress free</h5>
                <p className="decoration" >We strive to ensure your entire session is as low-stress and relaxed as possible.</p>
                <p className="decoration">Our photographers as skilled at helping you feel relaxed, comfortable and in the moment</p>
                <p className="decoration">We want the memories you make during your photoshoot to be just as good as the memories we capture.</p>
                <p className="decoration2">LETS HAVE SOME FUN!!!</p>

              </div>

            </div>
            <div class="col-md-7">
              <img src="./couples.jpg" class="img-fluid rounded-start" alt="..." style={{ height: "582px", width: "480px" }} />
            </div>
          </div>
        </div>
      </section>
      {/* meet the team button */}
      <div className="meetlink" >
        <Link to='/Meetteam' className="nav-link book-today1">MEET THE TEAM</Link>
      </div>
      {/* text section */}

      <section className="textcet">
        <div className="text-center">
          <p className="colorprice">PRICING GUIDE</p>
          <p className="colorprice1">ENGAGMENTS | BABY MOON | JUST FOR FUN | VOW RENEWAL</p>
          <p style={{ color: "#cd853f", fontSize: "18px" }}> Each package includes an edited gallery of high resolution digital photos and your choice of location from our curated list of favorite spots in India</p>
        </div>
      </section>

      {/* card section */}

      <section style={{ marginTop: "90px" }}>

        <div className="container">
          <div className="row ">
            <div class="col-lg-4 mb-3 mb-sm-0 ">
              <div class="card contstyle" >
                <div class="card-body" style={{ textAlign: "center", backgroundColor: "#8b4513" }}>
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
            <div class="col-lg-4">
              <div class="card contstyle2">
                <div class="card-body" style={{ textAlign: "center", backgroundColor: "#b5651d" }}>
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
            <div class="col-lg-4">
              <div class="card contstyle3">
                <div class="card-body" style={{ textAlign: "center", backgroundColor: "#8b4513" }}>
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
          </div>
        </div>
      </section>

      <div className="location">You will receive our location guide after booking to choose the perfect location.</div>
      <div className="meetlink" >
        <Link to='/Meetteam' className="nav-link book-today1">BOOK TODAY</Link>
        {/* have to createa a page for booking too. */}
      </div>
      {/* text before carosal */}
      <Uppertext textup={"Come and Explore"} textdown={"India with us"}/>

      {/* carousal and text */}

      <Textcarousalmoving/>

      

    </>
  )
}

export default Couple