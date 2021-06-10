import React from 'react';
import './WhyUsScreen.css'

function WhyUsScreen() {
    return (
        <>
        <div className="content">
        <h1>Why Us?</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was in the 1960s 
        with the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.</p>
        <button className="btn">Contact Us</button>
        </div>
        <div className="image">
        <img src="/images/network1.png" height="350px" width="500px"></img>
        </div>
            {/* <img src="/images/network1.png" height="350px" width="500px"></img> */}
        </>
    )
}

export default WhyUsScreen
