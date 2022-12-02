import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs'
import { Row, Col } from 'react-bootstrap'
import badges from '../../assets/images/elements/badges.png'
import card1image from '../../assets/images/elements/service1image.png'
import card1image2 from '../../assets/images/elements/service1image2.jpg'
import classes from '../../assets/css/ServiceServicing.module.scss'
import Image from 'next/image'

const ServiceServicing = () => {
  return (
    <div className={`${classes['servis-services-content']}`}>
      <div className='container'>
        <Breadcrumbs></Breadcrumbs>
        <div className={`${classes['head-holder']}`}>
          <div className={`${classes['title-holder']}`}>
            <h5>Usluga servisiranja</h5>
          </div>
        </div>
        <div className={`${classes['middle-holder']}`}>
          <Row>
            <Col xl={6} lg={6}>
              <div className={`${classes['card1']}`}>
                <h5>TERENSKO SERVISIRANJE</h5>
                <p>
                  Terensko servisiranje, po pozivu, je praktično
                  najrasprostranjeniji vid održavanja birotehničke opreme. Po
                  najpovoljnijim cenama, dobićete visok kvalitet usluge, sa
                  vremenom odziva u roku od 24h i isključivo originalne rezervne
                  delove i potrošni material, u koliko vaši zahtevi nisu
                  drugačiji.
                </p>
                <p>
                  U našem servisu zaposleno je nekoliko ekipa servisera koji
                  planski pokrivaju celu teritoriju Republike Srbije kao i u
                  inostranstvu gde obavljaju sve servisne usluge na lokaciji
                  korisnika ali i u našem sevisu. Pored kadrovskog naš servis je
                  opremeljen svim vrstama dostavnih vozila i time zadovoljava i
                  tehničke kapacitete poslovanja.
                </p>
              </div>
            </Col>
            <Col xl={6} lg={6}>
              <Image
                src={card1image}
                className='img-fluid w-100'
                alt='Mobs Technology Terensko Servisiranje'
              />
            </Col>
          </Row>
          <div className={`${classes['badges-holder']}`}>
            <Image src={badges} alt='Mobs Technology' className='img-fluid' />
          </div>
          <Row className='align-items-center'>
            <Col xl={6} lg={6}>
              <Image
                src={card1image2}
                className='img-fluid w-100'
                alt='Mobs Technology Terensko Servisiranje'
              />
            </Col>
            <Col xl={6} lg={6}>
              <div className={`${classes['card2']}`}>
                <h5>GENERALNI REMONT U NAŠEM SERVISU</h5>
                <p>
                  Kod generalnog remonta uređaja, spadaju sledeće usluge:
                  preuzimanje uređaja sa adrese korisnika, po potrebi dostavlja
                  se zamenski uređaja, defektaža, detaljno pranje uređaja, sa
                  rasklapanjem sklopova i pod sklopova svih jedinica. To je
                  najbolji način da se proveri kakvo je stvarno stanje
                  komponenti uređaja. Posle čišćenja i pranja, uređaj se
                  podmazuje, sklapa i testira. Potom pristupamo štelovanju
                  kvaliteta kopije i kontrole rada mašine , uređaj se pakuje u
                  zaštitnu foliju i dostavlja korisniku na dalju upotrebu. Da bi
                  uređaj bio stalno ispravan potrebno je raditi redovan servis.
                </p>
                <p>
                  Sertifikovani tehničari u kompaniji MIŠA CANON, poseduju
                  odlična znanja i u mogućnosti su da otklone svaki problem na
                  vašem uređaju.
                </p>
                <p>
                  Bez obzira na tip i brend vašeg uređaja, budite sigurni da
                  naši inženjeri imaju rešenje za svaki vaš problem. Stalno
                  unapređenje servisnog tima kao i edukacijsko usavršavanje
                  predstavlja jedno od glavnih načela politike kvaliteta
                  kompanije MIŠA CANON.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default ServiceServicing
