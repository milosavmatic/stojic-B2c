import React from 'react';
import { PagePreparation } from '../../components/PagePreparation/PagePreparation';
import Seo from '../../components/Seo/Seo';

function BecomeaPartner() {
  return (
    <>
      <Seo title="Postani partner" />
      <div className="staticPages">
        <div className="container">
          <h3>Postani naš partner</h3>
          <div className="staticPagesContent">
            <PagePreparation />
          </div>
        </div>
      </div>
    </>
  );
}

export default BecomeaPartner;
