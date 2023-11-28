import React from 'react'
import Hero from '../components/home/Hero'
import Service from '../components/home/Service'
import Catch from '../components/home/Catch'
import Showcase from '../components/home/Showcase'
import NewsFAQ from '../components/home/NewsFAQ'
import Footer from '../components/home/Footer'
import EzOneLink from '../components/home/EzOneLink'
import Subscription from '../components/home/Subscription'
const Home = () => {
  return (
    <div>
    <Hero/>
    <Service/>
    <Catch/>
    <Showcase/>
    <EzOneLink/>
    <div>Community & Partners</div>
   <NewsFAQ/>
   <Subscription/>
   <Footer/>
    </div>
    )
}

export default Home