import { Carousel } from 'react-bootstrap'
import classes from './MainSlider.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const MainSlider = ({ banners, mobileBanners }) => {
  return (
    <>
      <div className='mobile-hidden'>
        <Carousel>
          {(banners ?? []).map((banner) => (
            <Carousel.Item
              className={`${classes['main-slider']}`}
              key={banner.id}
            >
              {banner.url ? (
                <Link href={banner.url} target='_blank'>
                  <a>
                    <div className={`${classes['desktop-display']}`}>
                      <Image
                        src={banner.image}
                        alt='Mobs'
                        layout='fill'
                        objectFit='fill'
                      />
                    </div>
                  </a>
                </Link>
              ) : (
                <div className={`${classes['desktop-display']}`}>
                  <Image
                    src={banner.image}
                    alt='Mobs'
                    layout='fill'
                    objectFit='fill'
                  />
                </div>
              )}

              {banner.button && (
                <Carousel.Caption className={`${classes['custom-caption']}`}>
                  <Link href='/'>
                    <a
                      variant='danger'
                      className={`${classes['button-caption']}`}
                    >
                      {banner.button}
                    </a>
                  </Link>
                </Carousel.Caption>
              )}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className='desktop-hidden'>
        <Carousel>
          {(mobileBanners ?? []).map((banner) => (
            <Carousel.Item
              className={`${classes['main-slider']}`}
              key={banner.id}
            >
              {banner.url ? (
                <Link href={banner.url} target='_blank'>
                  <a>
                    <div className={classes['mobile-display']}>
                      <Image
                        className={classes['mobile-display']}
                        src={banner.image}
                        alt='Mobs'
                        layout='fill'
                        objectFit='fill'
                      />
                    </div>
                  </a>
                </Link>
              ) : (
                <div className={classes['mobile-display']}>
                  <Image
                    className={classes['mobile-display']}
                    src={banner.image}
                    alt='Mobs'
                    layout='fill'
                    objectFit='fill'
                  />
                </div>
              )}

              {banner.button && (
                <Carousel.Caption className={`${classes['custom-caption']}`}>
                  <Link href='/'>
                    <a
                      variant='danger'
                      className={`${classes['button-caption']}`}
                    >
                      {banner.button}
                    </a>
                  </Link>
                </Carousel.Caption>
              )}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default MainSlider
