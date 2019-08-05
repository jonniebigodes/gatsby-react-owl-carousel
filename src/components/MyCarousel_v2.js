import React from "react"

import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import ImageOne from "../assets/images/starwarsri.jpg"
import ImageTwo from "../assets/images/wallpaper-155475.jpg"
import ImageThree from "../assets/images/wallpaper-158110.jpg"
import ImageFour from "../assets/images/wallpaper-162718.jpg"
import ImageFive from "../assets/images/wallpaper-164064.jpg"
import ImageSix from "../assets/images/wallpaper-249780.jpg"
const MyImageCarousel = () => (
  <OwlCarousel className="owl-theme" loop margin={10} nav>
    <div className="item">
      <img src={ImageOne} alt="one" style={{width:'300px', height:'300px'}}/>
    </div>
    <div className="item">
      <img src={ImageTwo} alt="two" style={{width:'300px', height:'300px'}}/>
    </div>
    <div className="item">
      <img src={ImageThree} alt="three" style={{width:'300px', height:'300px'}}/>
    </div>
    <div className="item">
      <img src={ImageFour} alt="st" style={{width:'300px', height:'300px'}}/>
    </div>
    <div className="item">
      <img src={ImageFive} alt="st" style={{width:'300px', height:'300px'}}/>
    </div>
    <div className="item">
      <img src={ImageSix} alt="st" style={{width:'300px', height:'300px'}}/>
    </div>
  </OwlCarousel>
)

export default MyImageCarousel
