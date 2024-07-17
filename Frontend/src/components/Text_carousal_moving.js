import React from 'react'
import '../components/filecss.css';

const Textcarousalmoving = () => {
    return (
        <>
            <section style={{ marginTop: "150px" }}>
                <h1 className='textstyle'>Epic views to POP</h1>
                <h1 className='textstyle'>The Big question</h1>
            </section>

            <div className="row">
                <div className="col-log-6">
                    <div className="row">
                        <div className="col-lg-5  text-center setrighttext">
                            <p >We know the best spots - from the most iconic scenery to the locals only gems. Over the years we’ve used our local know-how and love of all things nature to scout locations with that unique Zion & Southern Utah feel.</p>
                            <p style={{color:"#8b4513"}}>We have options that are easy access, off the beaten path, and big on adventure.</p>
                            <p>Our team is ready and waiting to help you choose the perfect location to capture your family.</p>
                        </div>
                        <div className="col-lg-7">
                            <div id="carouselExample" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="./couples_together.jpg" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="./couples_together2.jpg" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="./couples_together3.jpg" class="d-block w-100" alt="..." />
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

export default Textcarousalmoving