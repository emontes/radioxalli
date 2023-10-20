import React from 'react'
import './Radio.scss'
const Radio = ({ videoSrcURL, videoTitle, ...props }) => (
  <div>
    <video className="radio-box" controls autoplay="">
      <source src="https://stream9.mexiserver.com/8024/;" type="audio/mpeg" />
    </video>
  </div>
)

export default Radio
