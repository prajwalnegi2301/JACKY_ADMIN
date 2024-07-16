import React from 'react'
import ServiceGrid from '../Components/HomeComponents/ServiceGrid'
import Services from '../Components/HomeComponents/Services'
import Hero from '../Components/HomeComponents/Hero'
import ServiceSections from '../Components/HomeComponents/ServiceSection'
import Image from '../Components/HomeComponents/Image'
import ServiceOffers from '../Components/HomeComponents/ServiceOffer'
import ServiceOfferToMen from '../Components/HomeComponents/ServiceOfferToMen'
import Image2 from '../Components/HomeComponents/Image2'
import Icon from '../Components/HomeComponents/Icon';
import Image3 from '../Components/HomeComponents/Image3'

const Home = () => {
  return (
    <div>
    
      <ServiceGrid/>
      <Services/>
      <Hero/>
      <ServiceSections/>
      <Image/>
      <ServiceOffers/>
      <ServiceOfferToMen/>
      <Image2/>
      <Icon/>
      <Image3/>
      
    </div>
  )
}

export default Home
