import React from 'react'
import './Product-Single.css'

function Products1(props) {
    return (
        <div class="products_container">
            <div className="product_items">
            <div >{props.title}</div>
            <div className="product_line">
                <div className="single_product">
                <img src={props.image} alt="" className="product_image_grid"/>
                </div>
            </div>            
            </div>
            <br/>
            <div className="product_footer_text">
                <a href="#">See more</a>

            </div>

        </div>
    )
}

export default Products1
