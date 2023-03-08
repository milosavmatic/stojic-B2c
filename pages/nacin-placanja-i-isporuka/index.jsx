import React from 'react';
import { PagePreparation } from '../../components/PagePreparation/PagePreparation';
import Seo from '../../components/Seo/Seo';

function MethodOfPayment() {
  return (
    <>
      <Seo title="Način plaćanja" />
      <div className="staticPages">
        <div className="container">
          <h3>Način plaćanja i isporuka</h3>
          <div className="staticPagesContent">
            <PagePreparation />
          </div>
        </div>
      </div>
    </>
  );
}

export default MethodOfPayment;
