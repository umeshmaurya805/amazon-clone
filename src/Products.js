import React from 'react'
import './Product-grid.css'
function Products(props) {
    return (
        <div className="products_container">
            <div className="product_items">
            <div >{props.title}</div>
            <div className="product_grid">
            
            <div className="product_line">
                <div className="grid_product">
                <img src={props.images[0]} alt="" className="product_image_grid"/>
                <div className="product_text">
                    {props.text_image[0]}
                </div>
                </div>
                <div className="grid_product">

            <img src={props.images[1]}
             alt="" className="product_image_grid"/>
            <div className="product_text">
            {props.text_image[1]}
                </div>
                </div>
            </div>
            <div className="product_line">
                <div className="grid_product">
                <img src={props.images[2]}
                 alt="" className="product_image_grid"/>
                <div className="product_text">
                {props.text_image[2]}
                </div>
                </div>
                <div className="grid_product">
            <img src={props.images[3]}
             alt="" className="product_image_grid"/>
                <div className="product_text">
                {props.text_image[3]}
                </div>
                    </div>
        
            </div>
            </div>
            </div>

            <div className="product_footer_text">
                <a href="#">See more</a>

            </div>
            </div>
    )
}

export default Products
