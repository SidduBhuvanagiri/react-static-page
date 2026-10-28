import React from 'react'
import HeaderComp from "./components/header/header.jsx"
import Banner from "./components/section/Banner.jsx"
import CategoryCards from './components/section/CategoryCards.jsx'
import ProductCards from './components/section/ProductCards.jsx'
import Footer from './components/footer/footer.jsx'


function App(){
  return (
  <React.Fragment>
  <HeaderComp/>
  <Banner/>
  <CategoryCards/>
  <ProductCards/>
  <Footer/>
  </React.Fragment>

  )
}

export default App