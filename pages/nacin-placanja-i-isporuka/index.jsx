import React from 'react';
import { PagePreparation } from '../../components/PagePreparation/PagePreparation';

function MethodOfPayment() {
  return (
    <div className="staticPages">
      <div className="container">
        <h3>Način plaćanja i isporuka</h3>
        <div className="staticPagesContent">
        <PagePreparation/>
        </div>
      </div>
    </div>
  );
}

export default MethodOfPayment;
