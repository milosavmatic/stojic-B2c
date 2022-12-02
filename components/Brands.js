import React from 'react'
import classes from './Brands.module.scss'
import brand1 from '../assets/images/brands/fellowes.jpg'
import brand2 from '../assets/images/brands/galeb.jpg'
import brand3 from '../assets/images/brands/hcp.jpg'
import brand4 from '../assets/images/brands/hp.jpg'
import brand5 from '../assets/images/brands/canon.jpg'

import Image from 'next/image'
import Slider from './Slider/Slider'
import 'keen-slider/keen-slider.min.css'

const Brands = () => {
  return (
    <div className={`${classes['brands-holder']}`}>
      <div className='container'>
        <div className={`${classes['brands-items-holder']}`}>
          <Slider count={5}>
            <div className={`${classes['img-holder']} keen-slider__slide`}>
              <Image src={brand1} alt={'HP Mobs'} className='img-fluid' />
            </div>
            <div className={`${classes['img-holder']} keen-slider__slide`}>
              <Image src={brand2} alt={'HCP Mobs'} className='img-fluid' />
            </div>
            <div className={`${classes['img-holder']} keen-slider__slide`}>
              <Image src={brand3} alt={'Canon Mobs'} className='img-fluid' />
            </div>
            <div className={`${classes['img-holder']} keen-slider__slide`}>
              <Image src={brand4} alt={'Fellowes Mobs'} className='img-fluid' />
            </div>
            <div className={`${classes['img-holder']} keen-slider__slide`}>
              <Image src={brand5} alt={'Galeb Mobs'} className='img-fluid' />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Brands
