import React from 'react'
import './Banner.css'

class Banner extends React.Component{
    render(){
        return(
        <>
        <div className='img-outer-div'>
            <img src="https://coloshop-template.vercel.app/images/slider_1.jpg" alt=""  style={{width:"100%" , height:"800px"}}/>

            <div className='inner-div'>
                <h2 style={{color:"#e90ea7dd" }}>Spring / Summer Collection 2017</h2>

                <h1 >Get up to 30% Off <br />New Arrivals</h1>

                <button>SHOP NOW</button>

        </div>

        </div>
        
    </>
    )}
}

export default Banner