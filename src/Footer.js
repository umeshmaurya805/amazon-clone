import React from 'react'
import './footer.css'
import amazon from './images/amazon.png'
import LanguageIcon from '@material-ui/icons/Language';
function Footer() {
    return (
        <div className="footer">
            <div className="footer-scroll">
               <a href="#header">Back to top</a> 
            </div>
            <div className="footer-main">
                <div className="footer-card">
                    <div className="card-heading">
                        Get to Know Us
                    </div>
                    <a>About Us</a>
                    <a>Careers</a>
                    <a>Press Releases</a>
                    <a>Amazon Cares</a>
                    <a>Gift a smile</a>
                </div>
                <div className="footer-card">
                    <div className="card-heading">
                    Connect with Us
                    </div>
                    <a>Facebook</a>
                    <a>Twitter</a>
                    <a>Instagram</a>
                    
                </div>
                <div className="footer-card">
                    <div className="card-heading">
                        Make Mone with Us
                    </div>
                    <a>Sell on Amazon</a>
                    <a>Sell under Amazon Accelerator</a>
                    <a>Become an Affiaate</a>
                    <a>Fulfilment by Amazon</a>
                    <a>Advertise Your Products</a>
                    <a>Amazon Pay on Merchants</a>
                </div>
                <div className="footer-card">
                    <div className="card-heading">
                    Let Us Help You
                     </div>
                    <a>COVID-19 and Amazon</a>
                    <a>Returns Centre</a>
                    <a>100% Purchase Protection</a>
                    <a>Amazon App Download</a>
                    <a>Amazon Assistant Download</a>
                    <a>Help</a>
                </div>
            </div>
            <div className="footer-line"></div>
            <div className="footer-bottom">
            <div className="footer-logo">
                <img src={amazon} alt="logo"/>
            </div>
            <div className="footer-language">
                <LanguageIcon fontSize="small" className="language-icon"/>
                <select name="language" id="">
                    <option value="English">English</option>
                </select>
            </div>
            </div>
            <div className="footer-countries">
                <a href="">Australia</a>
                <a href="">Brazil</a>
                <a href="">Canada</a>
                <a href="">China</a>
                <a href="">France</a>
                <a href="">Germany</a>
                <a href="">Italy</a>
                <a href="">Japan</a>
                <a href="">Mexico</a>
                <a href="">Netherlands</a>
                <a href="">Singapore</a>
                <a href="">Spain</a>
                <a href="">United Arab Emirates</a>
                <a href="">United Kingdom</a>
                <a href="">United States</a>
            </div>
            <div className="footer-amazon-services">
                <div className="amazon-services-line1">
                    <div className="amazon-services">
                            <a href="">AbeBooks<br/>
                            <span href="">Books, art <br/> &amp; collectibles</span>
                            </a>
                    </div>
                    <div className="amazon-services">
                        <a href="">Shopbop<br/>
                        <span href="">Designer <br/> Fashion Brands</span>
                        </a>
                    </div> 
                </div>
                <div className="amazon-services-line1">
                    <div className="amazon-services">
                        <a href="">Amazon Web Services<br/>
                        <span href="">Scalable Cloud <br/> Computing Services</span>
                        </a>
                    </div>
                    <div className="amazon-services">
                        <a href="">Amazon Business<br/>
                        <span href="">Everything For <br/> Your Business</span>
                        </a>
                    </div>
                </div>
                <div className="amazon-services-line1">
                    <div className="amazon-services">
                        <a href="">Audible<br/>
                        <span href="">Download <br/> Audio Books</span>
                        </a>
                    </div>
                    <div className="amazon-services">
                        <a href="">Prime Now<br/>
                        <span href="">2-Hour Delivery <br/> on Everyday Items</span>
                        </a>
                    </div>
                </div>
                <div className="amazon-services-line1">
                    <div className="amazon-services">
                        <a href="">DPReview<br/>
                        <span href="">Digital <br/> Photography</span>
                        </a>
                    </div>
                    <div className="amazon-services">
                        <a href="">Amazon Prime Music<br/>
                        <span href="">60 million songs</span>
                        </a>
                    </div>
                </div>
                <div className="amazon-services-line1">
                    <div className="amazon-services">
                        <a href="">IMDB<br/>
                        <span href="">Movies, TV <br/> &amp; Celebrities</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-privacy">
                <a href="">Conditions of Use &amp; Sale </a>
                <a href="">Privacy Notice</a>
                <a href="">Interest-Based Ads </a>
                <span>© 1996-2020, Amazon.com, Inc. or its affiliates</span>
                
                
            </div>
        </div>
    )
}

export default Footer
