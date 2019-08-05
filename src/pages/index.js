import React from "react"
import Loadable from "react-loadable"
const loader=()=>(<div>Loading...</div>)

const MyLoadableCarousel = Loadable({
  loader: () => import("../components/MyCarousel"),
  loading: loader,
})

export default () => (
    <div>
      <p>Hello world!</p>
      <MyLoadableCarousel/>
    </div>
  )
  