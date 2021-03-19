import React from "react"
const Radio = ({ videoSrcURL, videoTitle, ...props }) => (
  <div >
    <video controls autoplay="">
    <source 
    src="http://192.99.6.50:9960/stream?type=http&amp;nocache=2" 
    type="audio/mpeg"
    />
    </video>
  </div>
);

export default Radio