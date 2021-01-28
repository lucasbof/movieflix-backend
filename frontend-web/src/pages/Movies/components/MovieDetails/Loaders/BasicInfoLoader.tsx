import React from "react"
import ContentLoader from "react-content-loader"

const BasicInfoLoader = () => (
  <ContentLoader 
    speed={2}
    width={1170}
    height={374}
    viewBox="0 0 1170 374"
    backgroundColor="#6c6c6c"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="1170" height="394" />
  </ContentLoader>
)

export default BasicInfoLoader;

