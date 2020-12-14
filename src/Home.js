import React from 'react'
import Footer from './Footer'
import './Home.css'
import ProductScroll from './Product-scroll'
import Products from './Products'
import Products1 from './Products1'

function Home() {
    return (
        <div className="Home">
            <div className="home_container">
                <img className="home_image" 
                src={`https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/17thnov/A15_bnkOffer/Rv2/D18788625_IN_WLME_OPPO_Family_DesktopTallHero_1500x600_2._CB415602008_.jpg`}
                alt=""/>
            </div>
           <div className="products">
           <Products title="Revamp your home in style"
            images={[
                'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_1_bd034eee_6f06_4e0a_9967_d0e0e5f7f932_jpg_LOWER_QL10_._SY116_CB423376243_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_2_64e793dc_221d_4067_8fca_2f0338879977_jpg_LOWER_QL85_._SY116_CB423376243_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_3_ccc0f761_ea08_4cfb_9562_6f13e80170d8_jpg_LOWER_QL30_._SY116_CB423376243_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_4_bc4e9dc4_a3aa_4aae_93fd_9723dacd805f_jpg_LOWER_QL50_._SY116_CB423376243_.jpg'
            ]}
            text_image={[
                'Bedsheets, curtains & more',
                'Home decoration',
                'Home storage',
                'Lightning Solutions'
            ]}
           />
            <Products title="Amazon Book Bazaar | Best of 2020"
            images={[
                'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/122020/BookBazaar/newrel_1x._SY116_CB413353490_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/122020/BookBazaar/Most_sold_1x._SY116_CB413353490_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/122020/BookBazaar/Buzz_1x._SY116_CB413353490_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/122020/BookBazaar/BB-logo-dec-1x._SY116_CB413364787_.jpg'
            ]}
            text_image={[
                'Bedsheets, curtains & more',
                'Home decoration',
                'Home storage',
                'Lightning Solutions'
            ]}
           />
           <Products1 title="For a productive home office" image={`https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/GW/Dashboard/WFH_GW_DC_379x304._SY304_CB417122473_.jpg`}/>
           <Products1 title="Studio headphones, audio interfaces & more" image={`https://images-eu.ssl-images-amazon.com/images/G/31/img20/Camera/GoPro/Gateway/379x304_pc_cc._SY304_CB417124607_.jpg`}/>
           
           <Products1 
           title="For efficient home working"
            image={`https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg`}/>
            <Products1 
           title="Chocolates, sweets & more"
            image={`https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg`}/>
            <Products title="Up to 30% off | Top mobiles &amp; accessories"
            images={[
                'https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/MSO_Weblab/186_116/186x116_2._SY116_CB416674425_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/MSO_Weblab/186_116/186x116_3._SY116_CB416674425_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/MSO_Weblab/186_116/186x116_4._SY116_CB416674425_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/MSO_Weblab/186_116/186x116_5._SY116_CB416674552_.jpg'
            ]}
            text_image={[
                'Best sellers',
                'Top Rated',
                'Great Offers',
                'Accessories'
            ]}
           />
             <Products title="Amazon Fashion | Top Brands"
            images={[
                'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/GW-BAU/QC/PC/5._SY116_CB416800329_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/GW-BAU/QC/PC/6._SY116_CB416800329_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/GW-BAU/QC/PC/1._SY116_CB416800329_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/GW-BAU/QC/af._SY116_CB416766228_.jpg'
            ]}
            text_image={[
                'Clothing',
                'Footwear',
                'Bags, watches and more',
                'View all fashion'
            ]}
           />
           </div>
           <ProductScroll
           text='Up to 60% off | Unboxed & like-new'
           images={[
               'https://m.media-amazon.com/images/I/41tGEvMDdLL._AC_SY200_.jpg',
               'https://m.media-amazon.com/images/I/31+d4s0JREL._AC_SY200_.jpg',
               'https://m.media-amazon.com/images/I/317lyvPC6vL._AC_SY200_.jpg',
               'https://m.media-amazon.com/images/I/31WbYQd8PbL._AC_SY200_.jpg',
               'https://m.media-amazon.com/images/I/41CW6vdWqmL._AC_SY200_.jpg',
               'https://m.media-amazon.com/images/I/31vTxfl86kL._AC_SY200_.jpg',
               'https://m.media-amazon.com/images/I/41hIk6rKyHL._AC_SY200_.jpg',
               'https://m.media-amazon.com/images/I/41NLgLU02lL._AC_SY200_.jpg',
               'https://m.media-amazon.com/images/I/31OAI1l3rSL._AC_SY200_.jpg',
               'https://m.media-amazon.com/images/I/41nz2NkY5fL._AC_SY200_.jpg',
               'https://m.media-amazon.com/images/I/312DpQ1am9L._AC_SY200_.jpg',
               'https://m.media-amazon.com/images/I/21-nCg9DapL._AC_SY200_.jpg',
               'https://m.media-amazon.com/images/I/41BWCebbOQL._AC_SY200_.jpg'
           ]}
           />
                      <div className="products">

  <Products title="Upgrade your home"
            images={[
                'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/B00OT9CS5S_186x116._SY116_CB417134289_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/B08345R1ZW_186x116._SY116_CB417134289_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/WFH_186x116._SY116_CB417134289_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/B01N5KIHWN_186x116._SY116_CB417134288_.jpg'
            ]}
            text_image={[
                'Watching machines and more',
                'Kitchen appliances',
                'WFH furniture',
                'Bestselling furniture'
            ]}
           />      
           <Products title="For the perfect birthday celebration"
            images={[
                'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/gifts-by-interest_1x._SY116_CB415005894_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/most-gifted_1x._SY116_CB415005895_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/gift-cards_1x._SY116_CB415005895_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/decorations_1x._SY116_CB415005894_.jpg'
            ]}
            text_image={[
                'Gift by interest',     
                'Most gifted',
                'Gift cards',
                'Decorations'
            ]}
           />      
            <Products title="Voice control your lights & appliances | Ask Alexa"
           images={[
               'https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/MSO/desktop/MSO_QC_1x_R1_._SY116_CB445377558_.jpg',
               'https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/MSO/desktop/111a._SY116_CB445137957_.jpg',
               'https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/MSO/desktop/222a._SY116_CB445137957_.jpg',
               'https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/MSO/desktop/MSO_QC_1x_R4._SY116_CB445377558_.jpg'
           ]}
           text_image={[
               'Smart bulb',     
               'Echo devices',
               'Smart Plug',
               'All-new fire Tv stick'
           ]}
           
          />     
          <Products1 
           title="Luxury ayurveda products"
            image={`https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/Luxury-Category-card-1x._SY304_CB448731790_.jpg`}/>
            
           </div>
           <Footer/>




             </div>
    )
}

export default Home
