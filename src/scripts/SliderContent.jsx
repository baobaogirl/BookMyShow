import React from "react";

function SliderContent({activeIndex, SliderImage}){
    return(

        <>
            {SliderImage.map((slide, index) => (
                <div
                key={index}
                className={index === activeIndex ? "slide active": "inactive"}
                >
                <img className="slide-image" src={slide.urls} alt="" />
                </div>
            ))}
        </>
    )
}

export default SliderContent