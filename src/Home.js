import React from 'react'
import './Home.css';
import Product from './Product';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home({title}) {
  

  document.title = title; 
    return (
        <div className='home'>
        <div className="home__container">
            <Carousel className='home_img' infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} sho>
                <img className='carousel__img'  src="	https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg" />
                <img className='carousel__img'  src="https://m.media-amazon.com/images/I/71tlpT2XosL._SX3000_.jpg" />
                <img className='carousel__img'   src="https://m.media-amazon.com/images/I/51gNPgXZZ-L._SX3000_.jpg" />   
                <img className='carousel__img'   src="https://m.media-amazon.com/images/I/71MwDPWV9XL._SX3000_.jpg" />
            </Carousel>
  
            <div className="home__row">
            
              <Product
                id="12321341"
                title="HP Pavilion x360 11th Gen Intel Core i3 14-inch(35.6 cm) FHD Touchscreen Convertible Laptop (8GB/512GB SSD/Windows 10/MS Office 2019/Fingerprint Reader/1.52kg), 14-dy0002TU, Silver"
                price={58990}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/I/419V1PlZ3TL._SY300_SX300_QL70_FMwebp_.jpg"
  
              />
              <Product
                id="49538094"
                title="Mi Power Bank 3i 20000mAh | 18W Fast PD Charging | Input- Type C and Micro USB| Triple Output | Sandstone Black"
                price={1699}
                rating={4}
                image="https://m.media-amazon.com/images/I/71lVwl3q-kL._SL1500_.jpg"
              />
            </div>

            <div className="home__row">
              <Product
                id="4903850"
                title= 'Noise ColorFit Ultra Bezel-Less Smart Watch with 1.75" HD TruView Display, 60 Sports Modes, SpO2, Heart Rate, Stress, REM & Sleep Monitor, Stock Market Info (Space Blue)'
                price={3999}
                rating={3}
                image="https://m.media-amazon.com/images/I/71MO+TXgPBL._SL1500_.jpg"
              />
              <Product
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={15000}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
              />
              <Product
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={50000}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
              />
            </div>

            <div className="home__row">
              <Product
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={50000}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
              />
              <Product
                id="90829331"
                title="AmazonBasics 109 cm (43 inches) 4K Ultra HD Smart LED Fire TV AB43U20PS (Black)"
                price={29999}
                rating={4}
                image="https://m.media-amazon.com/images/I/71AqQyCMmeL._SL1240_.jpg"
              />
            </div>
          </div>
            
        </div>
    )
}

export default Home
