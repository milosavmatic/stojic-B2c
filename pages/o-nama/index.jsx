import React from 'react'
import { PagePreparation } from '../../components/PagePreparation/PagePreparation'

function index() {
  return (
    <div className="staticPages">
      <div className="container">
        <h3>O nama</h3>
        <div className="staticPagesContent">
          <PagePreparation />
        </div>
      </div>
    </div>
  )
}

export default index
