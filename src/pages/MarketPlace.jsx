import Carousel from '../components/MarketPlace/Carousel'
import React from 'react'
import Heading from '../components/MarketPlace/Heading'
import SearchSection from '../components/MarketPlace/SearchSection'
import Display from '../components/MarketPlace/Display'
import ProjectShowcase from '../components/MarketPlace/ProjectShowcase'
import Info from '../components/MarketPlace/Info'
import Feature from '../components/MarketPlace/Feature'

const MarketPlace = () => {
  return (
    <div className='pt-16 w-4/5 mx-auto'>
    <Heading/>
    <SearchSection/>
    <Display/>
    <Carousel/>
    <ProjectShowcase/>
    <Info/>
    <Feature/>
    </div>
  )
}

export default MarketPlace