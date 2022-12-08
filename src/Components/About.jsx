import React from 'react'

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt = ''/>
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p className='details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Natus impedit omnis maxime deserunt, iste perferendis exercitationem, facilis repellat,
              maiores asperiores velit incidunt modi eos quibusdam ea sequi beatae nisi minima.</p>
              <button>{props.button}</button>
        </div>

    </div>
  )
}

export default About

// store monitoring and store auditing