import React from 'react'

const Cardwithtext = () => {
  return (
    <>
    <section style={{ marginTop: "90px" }}>

        <div className="container">
          <div className="row ">
            <div class="col-lg-4 mb-3 mb-sm-0 ">
              <div class="card contstyle" >
                <div class="card-body" style={{ textAlign: "center", backgroundColor: "#8b4513" }}>
                  <h5 class="card-title" >Well</h5>
                  <h5 class="card-title" >Captured</h5>
                  <p class="card-text">Quick & easy locations with no hiking required.</p>
                  <p>30<br></br>MINUTES</p>
                  <br></br>
                  <p>20+<br></br>IMAGES</p>
                  <p>STARTING AT <br></br>$400</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card contstyle2">
                <div class="card-body" style={{ textAlign: "center", backgroundColor: "#b5651d" }}>
                  <h5 class="card-title">Living</h5>
                  <h5 class="card-text">The Dream</h5>
                  <p>Big views for the special moment with some hiking involved.</p>
                  <p>60-90 <br></br>MINUTES</p>
                  <br></br>
                  <p>40+<br></br>IMAGES</p>
                  <p>STARTING AT<br></br>$775</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card contstyle3">
                <div class="card-body" style={{ textAlign: "center", backgroundColor: "#8b4513" }}>
                  <h5 class="card-title">The Epic</h5>
                  <h5 class="card-title">Adventure</h5>
                  <p class="card-text">This package includes a big hike, big views and big adventure.</p>
                  <p>90 <br></br>MINUTES</p>
                  <br></br>
                  <p>50+ <br></br>IMAGES</p>
                  <p>STARTING<br></br>$1,200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Cardwithtext