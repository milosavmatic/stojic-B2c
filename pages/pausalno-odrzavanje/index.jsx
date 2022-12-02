import React from 'react'
import classes from '../../assets/css/ServiceFlatMaintenance.module.scss'
import Breadcrumbs from '../../components/Breadcrumbs'
import service2img from '../../assets/images/elements/service2img.png'
import Image from 'next/image'

const ServiceFlatMaintenance = () => {
  return (
    <div className='container'>
      <div className={`${classes['flat-maintenance-page-holder']}`}>
        <Breadcrumbs></Breadcrumbs>
        <div className={`${classes['head-holder']}`}>
          <div className={`${classes['title-holder']}`}>
            <h5>Paušalno održavanje</h5>
          </div>
        </div>
        <div className={`${classes['middle-holder']}`}>
          <div className={`${classes['content-holder']}`}>
            <div className={`${classes['text-holder']}`}>
              <p>
                MOB-S MIŠA CANON pruža usluge paušalnog održavanja fotokopir
                aparata.
              </p>
              <p>
                Paušal, već od 17 € mesečno, podrazumeva da vi kao korisnik
                fotokopir aparata ne morate brinuti o cenama tonera, delova,
                potrošnog materijala i rada servisera, kao ni o garanciji. Vaše
                je samo da pritisnete start dugme na aparatu, a MOB-S MIŠA CANON
                za sve ostalo brine.
              </p>
            </div>
            <div className={`${classes['img-holder']}`}>
              <Image
                src={service2img}
                alt='Mobs Technology Pausalno odrzavanje fotokopir aparata'
                className='img-fluid'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceFlatMaintenance
