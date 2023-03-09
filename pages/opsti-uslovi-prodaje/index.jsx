import React from 'react'
import { PagePreparation } from '../../components/PagePreparation/PagePreparation'
import Seo from '../../components/Seo/Seo'

const Condition = () => {
  return (
    <>
      <Seo title="Opšti uslovi prodaje" description="Opšti uslovi prodaje" ogtitle="Opšti uslovi prodaje" ogdescription="Opšti uslovi prodaje" ogurl={`${process.env.BASE_URL}opsti-uslovi-prodaje`} />
      <div className="staticPages">
        <div className="container">
          <h3>Opšti uslovi prodaje</h3>
          <div className="staticPagesContent">
            <PagePreparation />
          </div>
        </div>
      </div>
    </>
  )
}

export default Condition