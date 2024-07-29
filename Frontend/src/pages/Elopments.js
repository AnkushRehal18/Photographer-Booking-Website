import React from 'react'
import '../components/filecss.css';
import ElopImage from './Elopphoto.jpg';
import { Link } from 'react-router-dom';

const Elopments = () => {
  return (
     <>
    <section
        className="parallax"
        style={{
          backgroundImage: `url(${ElopImage})`,

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
            <div class="col-md-6">
              <div class="card-body">
                <h5 className="card-title text2 text-end" style={{ color: "#b5651d", }}>Love Adventure </h5>
                <h5 className="card-title text2 text-end" style={{ color: "#b5651d", }}>& Epic Views </h5>
                <p className="decoration" >WE ARE ZION ELOPMENT PHOTOGRAPHERS</p>
                <p className="decoration text-end">Let us help you plan an intimate Zion elopement that is everything you've always wanted for your special day. Be in the moment with your person and leave the location, timing & logistics to us</p>
                <p className="decoration text-end">Our team of local experts will help you find the epic Zion views that you have been dreaming of.</p>
                <p className="decoration text-end">You deserve a day that is low on stress and big on love & adventure.</p>

              </div>

            </div>
            <div class="col-md-6">
              <img src="./Elopmentsssss.jpg" class="img-fluid rounded-start" alt="..." style={{ height: "630px", width: "480px" }} />
            </div>
          </div>
        </div>
      </section>
      {/* meet the team button */}
      <div className="meetlink" >
        <Link to='/Meetteam' className="nav-link book-today1">MEET THE TEAM</Link>
      </div>

      {/* the lines before the card*/}

      <div className='text-center texttstyle2'>  Why Plan an Elopment in </div>
      <div className='text-center texttstyle3 ' style={{fontSize:"80px"}}> INDIA ?</div>

      {/* card section with image */}
      <section className="imgtext " style={{marginTop:"20px"}} >
        <div class="card mb-3 border-0" style={{ width: "900px" }}>
          <div class="row g-0">
            <div class="col-md-5">
              <div class="card-body">
                <p className="decoration1 text-end" >An elopement in Zion/Southern Utah, whether with your closest family and friends or just the two of you, is the ultimate way to combine travel, outdoor adventure, and the celebration of your love.</p>
                <p className="decoration3 text-end">There are so many reasons to ditch the big wedding, hop on a plane, and turn your "I do's" into a big adventure. Forget pressure from friends, family, and society telling you what your wedding day "should look like." Instead, plan a day that is true to your love</p>
                <p className="decoration text-end">Exchange vows beneath soaring sandstone cliffs. Wander with your love through swirly canyons of deep red and vibrant orange. Feel the desert sun on your skin and the red sand beneath your feet as you commit to loving your person forever. It really can be that simple and beautiful</p>
                
              </div>

            </div>
            <div class="col-md-7">
              <img src="./Elopmentss.jpg" class="img-fluid rounded-start" alt="..." style={{ height: "630px", width: "480px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* area for the photographers team */}

      <section className='photographers'>
        <div className='container ' >
          <div className='row' >
            <div className='col-lg-7' >
            <img src='./photography.webp' alt=''></img>
            </div>
            <div className='col-lg-5' style={{alignContent:"center"}}>
            <p className='font1'>A Little About</p>
            <p className='font2'>The Team</p>
            <p className='font3'>We are a team of local photogs dedicated to capturing the majesty of
            Zion National Park + Southern Utah.</p>
            <p className='font4'>Our process is simple, straight-forward, and all about authenticity.</p>
            <p className='font5'>WE ARE SKILLED AT HELPING YOU FEEL RELAXED, COMFORTABLE AND IN THE MOMENT. </p>
            <p className='font4'>We want the memories you make during your special day to be just as good as the memories we capture.</p>

            {/* change this button in end for check avalability */}
            <Link to='/Meetteam' className="nav-link book-today1">MEET THE TEAM</Link> 
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Elopments