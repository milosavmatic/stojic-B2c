import React from 'react'
import { PagePreparation } from '../../components/PagePreparation/PagePreparation'
import Seo from '../../components/Seo/Seo'

function index() {
  return (
    <>
      <Seo title="O nama" description="O nama" ogtitle="O nama" ogdescription="O nama" ogurl={`${process.env.BASE_URL}o-nama`} />
      <div className="staticPages">
        <div className="container">
          <h3>O nama</h3>
          <div className="staticPagesContent">
            <PagePreparation />
          </div>
        </div>
      </div>
    </>
  )
}

export default index
