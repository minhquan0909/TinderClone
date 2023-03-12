import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CrossIcon(props) {
  return (
    <Svg
      height="200px"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.001 512.001"
      xmlSpace="preserve"
      fill="#000"
      {...props}
    >
      <Path
        d="M457.127 9.187H54.873c-25.231 0-45.686 20.455-45.686 45.686v402.254c0 25.233 20.455 45.686 45.686 45.686h402.254c25.231 0 45.686-20.455 45.686-45.686V54.874c.001-25.233-20.454-45.687-45.686-45.687z"
        fill="#ff6465"
      />
      <Path
        d="M367.788 195.507L316.493 144.213 256.001 204.706 195.507 144.213 144.212 195.507 204.705 256.001 144.212 316.494 195.507 367.789 256.001 307.296 316.493 367.789 367.788 316.494 307.295 256.001z"
        fill="#fff"
      />
      <Path
        d="M70.427 457.127V54.874c0-25.231 20.455-45.686 45.686-45.686H54.872c-25.231 0-45.686 20.455-45.686 45.686v402.254c0 25.231 20.455 45.686 45.686 45.686h61.241c-25.231 0-45.686-20.454-45.686-45.687z"
        opacity={0.1}
        enableBackground="new"
      />
      <Path d="M54.872 512.001h55.403a9.186 9.186 0 000-18.372H54.872c-20.126 0-36.5-16.373-36.5-36.5V54.874c0-20.126 16.373-36.501 36.5-36.501h308.929c5.074 0 9.186-4.113 9.186-9.186S368.875.001 363.801.001H54.872C24.615.001 0 24.616 0 54.874v402.254c0 30.256 24.615 54.873 54.872 54.873zM400.546 18.373h56.581c20.128 0 36.501 16.375 36.501 36.5v402.254c0 20.126-16.373 36.5-36.501 36.5H147.021a9.186 9.186 0 000 18.372h310.107c30.257 0 54.873-24.615 54.873-54.872V54.874c0-30.257-24.617-54.872-54.873-54.872h-56.581c-5.074 0-9.186 4.113-9.186 9.186s4.11 9.185 9.185 9.185z" />
      <Path d="M309.997 137.717l-53.998 53.996-53.998-53.996c-3.588-3.588-9.404-3.588-12.99 0l-51.294 51.294c-3.588 3.588-3.588 9.404 0 12.99L191.714 256l-53.998 53.998a9.184 9.184 0 000 12.99l51.294 51.294a9.183 9.183 0 0012.99 0l53.998-53.998 53.998 53.998a9.183 9.183 0 0012.99 0l51.296-51.294c3.587-3.587 3.587-9.404 0-12.99L320.286 256l53.998-53.998c3.587-3.588 3.587-9.404 0-12.99l-51.296-51.294a9.186 9.186 0 00-12.991-.001zm-9.198 111.788a9.185 9.185 0 000 12.99l53.998 53.996-38.304 38.304-53.998-53.998a9.156 9.156 0 00-6.495-2.691c-2.35 0-4.702.897-6.495 2.691l-53.998 53.998-38.304-38.304 53.998-53.996a9.185 9.185 0 000-12.99l-53.998-53.998 38.304-38.304 53.998 53.998c3.588 3.588 9.404 3.588 12.99 0l53.998-53.998 38.304 38.304-53.998 53.998z" />
    </Svg>
  )
}

export default CrossIcon