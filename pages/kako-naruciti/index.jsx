import React from 'react';
import { PagePreparation } from '../../components/PagePreparation/PagePreparation';
import Seo from '../../components/Seo/Seo';

function HowToOrder() {
  return (
    <>
      <Seo title="Kako naručiti" />
      <div className="staticPages">
        <div className="container">
          <h3>Kako naručiti?</h3>
          <div className="staticPagesContent">
            <PagePreparation />
          </div>
        </div>
      </div>
    </>
  );
}

export default HowToOrder;
