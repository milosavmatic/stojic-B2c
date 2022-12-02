import React from 'react'
import service1 from '../../assets/images/elements/service7.jpg'
import service2 from '../../assets/images/elements/service1.jpg'
import service3 from '../../assets/images/elements/service3.jpg'
import service4 from '../../assets/images/elements/service4.jpg'
import Breadcrumbs from '../../components/Breadcrumbs'
import { Row } from 'react-bootstrap'
import Link from 'next/link'
import Col from 'react-bootstrap/Col'
import classes from '../../assets/css/ServisPage.module.scss'
import Image from 'next/image'

const ServisPage = () => {
  return (
    <div className={`${classes['servis-page-content']}`}>
      <div className='container'>
        <Breadcrumbs></Breadcrumbs>
        <div className={`${classes['title-holder']}`}>
          <h5>Servis</h5>
        </div>
      </div>
      <div className={`${classes['content-holder']}`}>
        <div className='container'>
          <Row>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={12}
              className={`${classes['service-holder']}`}
            >
              <Link
                href='/servisiranje'
                className={`${classes['service-link']}`}
              >
                <div className={`${classes['service-container']}`}>
                  <Image src={service4} alt='Mobs Technology' />
                  <h5>Usluga servisiranja</h5>
                </div>
              </Link>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={12}
              className={`${classes['service-holder']}`}
            >
              <Link
                href='/pausalno-odrzavanje'
                className={`${classes['service-link']}`}
              >
                <div className={`${classes['service-container']}`}>
                  <Image src={service2} alt='Mobs Technology' />
                  <h5>Paušalno održavanje</h5>
                </div>
              </Link>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={12}
              className={`${classes['service-holder']}`}
            >
              <Link
                href='/online-prijava-kvara'
                className={`${classes['service-link']}`}
              >
                <div className={`${classes['service-container']}`}>
                  <Image src={service3} alt='Mobs Technology' />
                  <h5>Online prijava kvara</h5>
                </div>
              </Link>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={12}
              className={`${classes['service-holder']}`}
            >
              <Link href='/support' className={`${classes['service-link']}`}>
                <div className={`${classes['service-container']}`}>
                  <Image src={service1} alt='Mobs Technology' />
                  <h5>Podrška potrošačima</h5>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default ServisPage
