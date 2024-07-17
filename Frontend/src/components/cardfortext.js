import React from 'react'

const cardfortext = () => {
  return (
    <div> <section className="cardmany ">
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
</div>
  )
}

export default cardfortext