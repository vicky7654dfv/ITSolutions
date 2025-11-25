import React from 'react'
import Header from '../../components/Header/Header'
import Banner1 from '../../components/Banner1/Banner1'
import HorizontalComponent from '../../components/HorizontalComponent/HorizontalComponent'
import ServicesSearch from '../../components/ServicesSearch/ServicesSearch'
import Home from '../../components/Home/Home'
import Footer from '../../components/Footer/Footer'

export default function HomePage1() {
  return (
    <div>
        <Header />
        <Banner1 />
        <HorizontalComponent />
        <ServicesSearch />
        <Home />
        <Footer />
    </div>
  )
}
