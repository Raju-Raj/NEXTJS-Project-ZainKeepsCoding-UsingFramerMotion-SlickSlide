import React from 'react';
import "./Testimonials.css";
import SlickSlider from './SlickSlider';

const Testimonials = () => {
  return (
    <div className='t-wrapper'>
        <div className="container">
            <div className="t-container">
                {/* head */}
                <div className="t-head">
                    <span className="tag">Testimonials</span>
                    <span className="title">
                        Access Capital That Complements Tradtional Funding Options
                    </span>
                    <span className="des">What people say about </span>
                </div>

            </div>

              {/* slider */}
              <SlickSlider/>
              
        </div>
    </div>
  )
}

export default Testimonials