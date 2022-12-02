import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Breadcrumbs from '../../components/Breadcrumbs'
import Button from 'react-bootstrap/Button'
import classes from '../../assets/css/ServiceOnlineReport.module.scss'

const ServiceOnlineReport = () => {
  return (
    <div className='container'>
      <div className={`${classes['online-report-page-holder']}`}>
        <Breadcrumbs></Breadcrumbs>
        <div className={`${classes['head-holder']}`}>
          <div className={`${classes['title-holder']}`}>
            <h5>Online prijava kvara</h5>
          </div>
        </div>
        <div className={`${classes['middle-holder']}`}>
          <Row className={`${classes['row-form']}`}>
            <Col>
              <Form.Label>Kompanija</Form.Label>
              <Form.Control
                aria-label='Username'
                aria-describedby='basic-addon1'
              />
            </Col>
            <Col>
              <Form.Label>Ime i prezime</Form.Label>
              <Form.Control
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
              />
            </Col>
          </Row>
          <Row className={`${classes['row-form']}`}>
            <Col>
              <Form.Group className='mb-3' controlId='formBasicPhoneNumber'>
                <Form.Label>Telefon</Form.Label>
                <Form.Control type='phoneNumber' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' />
              </Form.Group>
            </Col>
          </Row>
          <Row className={`${classes['row-form']}`}>
            <Col>
              <Form.Group className='mb-3' controlId='formBasicName'>
                <Form.Label>Model</Form.Label>
                <Form.Control type='name' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3' controlId='formBasicPhoneNumber'>
                <Form.Label>Error code</Form.Label>
                <Form.Control type='phone-number' />
              </Form.Group>
            </Col>
          </Row>
          <InputGroup className={`${classes['row-form-custom']}`}>
            <InputGroup.Text className='mb-2'>Opis kvara</InputGroup.Text>
            <Form.Control
              className={`${classes['text-input']}`}
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
        </div>
      </div>
    </div>
  )
}

export default ServiceOnlineReport
