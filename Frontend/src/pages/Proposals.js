import React from 'react'
import '../components/filecss.css';
import PurposalImage from './Purposing.jpg';
import Cardwithtext from '../components/Cardwithtext';
import { Link } from 'react-router-dom';
import Textcarousalmoving from '../components/Text_carousal_moving';
const Proposals = () => {
  return (
    <>
    <section
        className="parallax"
        style={{
          backgroundImage: `url(${PurposalImage})`,

        }}
      >
        <div className="photoText">
          <h3 className="photofont">PHOTOGRAPHING PROPOSALS IN </h3>
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
                <h5 className="card-title text1" style={{ color: "#b5651d", }}>Capture the Moment</h5>
                <p className="decoration" >Zion is the perfect backdrop for  popping the big question. We are here to help you coordinate your surprise and make sure everything goes off with out a hitch so you can relax and be in the moment with your love.</p>
                <p className="decoration">Our team is well versed in all things surprise proposal. We have over 7 years of experience planning surprise proposals in Zion National Park.</p>
                <p className="decoration2">LETS HAVE SOME FUN!!!</p>

              </div>

            </div>
            <div class="col-md-7">
              <img src="./Purposals.avif" class="img-fluid " alt="..." style={{ height: "718px", width: "480px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* text section before the pricing guide */}

      <section className='container styling'>Celebrate the start of your next big adventure!!! Let's preserve the magic so you can look back and remember this special moment for years to come.  </section>
       {/* text section */}

       <section className="textcet">
        <div className="text-center">
          <p className="colorprice">PRICING GUIDE</p>
          <p style={{ color: "#cd853f", fontSize: "18px" }}> Each package includes an edited gallery of high resolution digital photos and your choice of location from our curated list of favorite spots in India</p>
        </div>
      </section>

      {/* card with text */}
      <Cardwithtext />

      
      <div className="location">You will receive our location guide after booking to choose the perfect location.</div>
      <div className="meetlink" >
        <Link to='/Meetteam' className="nav-link book-today1">Get the guide</Link>  {/* add a guide page here */}
        
      </div>
      {/* moving carousal */}
      <Textcarousalmoving/>
    </>
  )
}

export default Proposals