import React, { useState, useEffect } from 'react'
import SliderContent from '../../scripts/SliderContent'
import Arrows from '../../scripts/Arrows'
import SliderImage from '../../scripts/SliderImage'
import "../../scripts/slider.css"

function Slider() {
  const len = SliderImage.length - 1
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [len])

  return (
    <div className='slider-container'>
      <SliderContent activeIndex={activeIndex} SliderImage={SliderImage} />
      <Arrows
        prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
        nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
      />
    </div>
  )
}

export default Slider
