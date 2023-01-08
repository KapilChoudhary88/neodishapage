import React from 'react'

function Cards() {
  return (
    <div>
      <div className="section over-hide">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div className="section text-center py-5 py-md-0">
			<p className='paara_analysis'>hello  world</p>
			          	<input className="pricing" type="checkbox" id="pricing" name="pricing"/>
			          	<label for="pricing"><span className="block-diff">Auditing<span className="float-right"> Monitoring</span></span></label>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="pricing-wrap">
										
										<h4 className="mb-5">Store Auditing</h4>
										<p className="mb-4">Store audit reports are automatically generated in real-time
                  by the brain (AI/ML engine) of DIShA. These comprehensive
                  reports are displayed on the web-app and periodically mailed
                  to the configured recipients.</p>
										<p className="mb-1"><i className="uil uil-location-pin-alt size-22"></i></p>
										{/* <p className="mb-4">Store Auditing is a feature provided by us in which we audit 
										the shelf</p>
										<a href="#0" className="link">Choose Date</a> */}
										<div className="img-wrap img-2">
											<img src="https://cdn-icons-png.flaticon.com/128/4307/4307974.png" alt=""/>
										</div>
										<div className="img-wrap img-1">
											<img src="https://cdn-icons-png.flaticon.com/128/4307/4307952.png" alt=""
											style={{"height": "70px" , "width": "75px"}}/>
										</div>
										<div className="img-wrap img-3">
											{/* <img src="https://cdn-icons-png.flaticon.com/128/9303/9303582.png" alt=""/> */}
										</div>
										<div className="img-wrap img-6">
											<img src="https://cdn-icons-png.flaticon.com/128/9303/9303582.png" alt=""
											style={{"height": "70px" , "width": "75px"}}
											/>
										</div>
			      					</div>
			      				</div>
								<div className="card-back">
									<div className="pricing-wrap">
										<h4 className="mb-5">Camping</h4>
										<h2 className="mb-2"><sup>$</sup>29 / 8<sup>hrs</sup></h2>
										<p className="mb-4">per person</p>
										<p className="mb-1"><i className="uil uil-location-pin-alt size-22"></i></p>
										<p className="mb-4">Tara, Serbia</p>
										<a href="#0" className="link">Choose Date</a>
										<div className="img-wrap img-2">
											<img src="https://assets.codepen.io/1462889/grass.png" alt=""/>
										</div>
										<div className="img-wrap img-4">
											<img src="https://assets.codepen.io/1462889/camp.png" alt=""/>
										</div>
										<div className="img-wrap img-5">
											<img src="https://assets.codepen.io/1462889/Ivy.png" alt=""/>
										</div>
										<div className="img-wrap img-7">
											<img src="https://assets.codepen.io/1462889/IvyRock.png" alt=""/>
										</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
    </div>
  )
}

export default Cards
