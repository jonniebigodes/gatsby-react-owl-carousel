import React from 'react'
import Loadable from "react-loadable"
const loader=()=>(<div>Loading image carousel...</div>)


const MyLoadableImageCarousel = Loadable({
    loader: () => import("../components/MyCarousel_v2.js"),
    loading: loader,
  })
  
  export default () => (
      <div>
        <p>this is a carousel with images!</p>
        <MyLoadableImageCarousel/>
      </div>
    )
    