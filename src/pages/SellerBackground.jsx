import React from 'react'
import Banner from '../components/seller/Background/Banner'
import Heading from '../components/seller/Background/Heading'
import FillOption from '../components/seller/Background/FillOption'
import Steps from '../components/seller/Common/Steps'
const SellerBackground = () => {
  return (
    <div className='pt-16 w-4/5 mx-auto text-left pb-10'>
    <Steps/>
    <Banner/>
    <Heading/>
    <FillOption/>
    </div>
  )
}

export default SellerBackground