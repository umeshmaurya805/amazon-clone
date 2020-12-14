import React from 'react'
import './Product-scroll.css'
function ProductScroll(props) {
    return (
        <div className="product-scroll-container">
          
            <div className="product-image-container">
            <div className="product-scroll-text">
                {props.text} &nbsp;
                <a href="">See all deals</a>
            </div>
            <div className="product-scroll-images">
                {props.images.map((value,i)=>{
                    return(
                        // <div className="product-scroll-image-container">
                        <img className="product-scroll-image" src={value} alt={i} />
                        // </div>

                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default ProductScroll
