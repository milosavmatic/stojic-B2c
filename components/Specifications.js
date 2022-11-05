import React, { Fragment } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Table from 'react-bootstrap/Table'

const Specifications = ({ specifications = [] }) => {
  return (
    <div className='spec-holder'>
      <Tabs
        defaultActiveKey='home'
        id='uncontrolled-tab-example'
        className='mb-3'
      >
        <Tab eventKey='home' title='Dodatne informacije'>
          <Table striped hover>
            <tbody>
              {(specifications ?? []).map((data) => {
                return (
                  <Fragment key={data?.set?.id}>
                    {(Object.values(data.groups) ?? []).map((item) => {
                      return (
                        <Fragment key={item?.group?.id}>
                          {(Object.values(item.attributes) ?? []).map(
                            (attribute) => {
                              return (
                                <tr key={attribute?.attribute?.id}>
                                  <td>{attribute?.attribute?.name}</td>
                                  <td>
                                    {(attribute?.values ?? []).map(
                                      (value, i) => {
                                        if (i + 1 < attribute?.values.length) {
                                          return value.name + ','
                                        } else {
                                          return value.name
                                        }
                                      }
                                    )}
                                  </td>
                                </tr>
                              )
                            }
                          )}
                        </Fragment>
                      )
                    })}
                  </Fragment>
                )
              })}
            </tbody>
          </Table>
        </Tab>
        {/* <Tab eventKey='profile' title='Recenzije'>
          /
        </Tab>
        <Tab eventKey='contact' title='Pitanja i odgovori'>
          /
            </Tab> */}
      </Tabs>
    </div>
  )
}

export default Specifications
