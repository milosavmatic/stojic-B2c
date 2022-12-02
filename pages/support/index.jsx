import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Breadcrumbs from '../../components/Breadcrumbs'
import Button from 'react-bootstrap/Button'
import classes from '../../assets/css/ServiceSupport.module.scss'

const ServiceSupport = () => {
  return (
    <div className='container'>
      <div className={`${classes['support-page-holder']}`}>
        <Breadcrumbs></Breadcrumbs>
        <div className={`${classes['head-holder']}`}>
          <div className={`${classes['title-holder']}`}>
            <h5>Podrška potrošačima</h5>
          </div>
        </div>
        <div className={`${classes['middle-holder']}`}>
          <Row className={`${classes['row-form']}`}>
            <Col>
              <Form.Control
                aria-label='Username'
                placeholder='Ime'
                aria-describedby='basic-addon1'
              />
            </Col>
            <Col>
              <Form.Control
                aria-label="Recipient's username"
                placeholder='Email Adresa'
                aria-describedby='basic-addon2'
              />
            </Col>
          </Row>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Control type='name' placeholder='Naslov' />
          </Form.Group>
          <InputGroup className={`${classes['row-form-custom']}`}>
            <Form.Control
              className={`${classes['text-input']}`}
              placeholder='Poruka'
              as='textarea'
              aria-label='Opis kvara'
            />
          </InputGroup>
          <Button
            variant='primary'
            className={`${classes['input-button']}`}
            type='submit'
          >
            Pošalji
          </Button>
          <div className={`${classes['send-request-text']}`}>
            <p>Sva pitanja možete slati na email.</p>
            <p>servis@misacanon.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceSupport
