import React from "react"
import "./Radio.scss"
const Radio = ({ videoSrcURL, videoTitle, ...props }) => (
  <div>
    <video className="radio-box" controls autoplay="">
    <source 
    src="http://192.99.6.50:9960/stream?type=http&amp;nocache=2" 
    type="audio/mpeg"
    />
    </video>
  </div>
);

export default Radio